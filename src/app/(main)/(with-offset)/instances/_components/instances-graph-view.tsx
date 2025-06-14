"use client";
import type { ConvexPolyhedronProps, PlaneProps, Triplet } from "@react-three/cannon";
import { Physics, useConvexPolyhedron, usePlane } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import type { BufferGeometry, Mesh } from "three";
import { BoxGeometry } from "three";
import { Geometry } from "three-stdlib";
import { useRouter } from "next/navigation";
import { useColorScheme } from "@mui/material/styles";
import { OrbitControls } from "@react-three/drei";
import { A11y, A11yAnnouncer, useA11y } from "@react-three/a11y";

function toConvexProps(bufferGeometry: BufferGeometry): [vertices: Triplet[], faces: Triplet[]] {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  geo.mergeVertices();
  const vertices: Triplet[] = geo.vertices.map((v) => [v.x, v.y, v.z]);
  const faces: Triplet[] = geo.faces.map((f) => [f.a, f.b, f.c]);
  return [vertices, faces];
}

type CubeProps = Pick<ConvexPolyhedronProps, "position" | "rotation"> & {
  size: number;
};

function Cube({ position, rotation, size }: CubeProps) {
  // note, this is wildly inefficient vs useBox
  const geometry = useMemo(() => new BoxGeometry(size, size, size), [size]);
  const args = useMemo(() => toConvexProps(geometry), [geometry]);
  const [ref] = useConvexPolyhedron(
    () => ({ args, mass: 100, position, rotation }),
    useRef<Mesh>(null),
  );

  const a11y = useA11y();
  return (
    <mesh castShadow receiveShadow {...{ geometry, position, ref, rotation }}>
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial color={a11y.focus || a11y.hover ? "#555555" : "#ffffff"} />
    </mesh>
  );
}

function Plane({
  color,
  ...props
}: PlaneProps & {
  color: string;
}) {
  const [ref] = usePlane(() => ({ type: "Static", ...props }), useRef<Mesh>(null));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial color={color} />
    </mesh>
  );
}

type InstanceNodeProps = {
  id: string;
  title: string;
};

function InstanceNode({ id, title }: InstanceNodeProps) {
  const router = useRouter();
  return (
    <A11y
      role={"link"}
      href={`/instances/${id}`}
      description={"link"}
      actionCall={() => {
        router.push(`/instances/${id}`);
      }}
    >
      <Cube position={[2, 3, -0.3]} rotation={[0.5, 0.4, -1]} size={0.2} />
    </A11y>
  );
}

export type InstancesGraphViewProps = {
  instances: {
    id: string;
    title: string;
  }[];
};
export default function InstancesGraphView({ instances }: InstancesGraphViewProps) {
  const { mode } = useColorScheme();

  const backGroundColor = mode === "dark" ? "black" : "white";

  return (
    <>
      <Canvas camera={{ fov: 50, position: [-1, 1, 5] }} shadows>
        <color attach="background" args={[backGroundColor]} />
        <spotLight
          angle={0.3}
          castShadow
          decay={0}
          intensity={2 * Math.PI}
          penumbra={1}
          position={[15, 15, 15]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Suspense fallback={null}>
          <Physics>
            <group>
              <Plane rotation={[-Math.PI / 2, 0, 0]} color={backGroundColor} />
              {instances.map((instance) => (
                <InstanceNode key={instance.id} id={instance.id} title={instance.title} />
              ))}
            </group>
          </Physics>
          <OrbitControls />
        </Suspense>
      </Canvas>
      <A11yAnnouncer />
    </>
  );
}
