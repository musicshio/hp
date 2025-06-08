"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { Box, Stack } from "@mui/material";
import Hero from "@/app/(main)/about/_components/hero";
import Music from "@/app/(main)/about/_components/music-composer/music";
import WebEngineer from "@/app/(main)/about/_components/web-engineer/web-engineer";

gsap.registerPlugin(Observer);

const sections = [
  {
    id: "about",
    component: Hero,
  },
  {
    id: "web",
    component: WebEngineer,
  },
  {
    id: "music",
    component: Music,
  },
];

export default function VerticalSlides({ initialIndex }: { initialIndex: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastTriggerTime = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [visualIndex, setVisualIndex] = useState(initialIndex);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const sectionsRefs = useMemo(() => [section1Ref, section2Ref, section3Ref], []);

  // 初期位置を設定
  useEffect(() => {
    if (containerRef.current) {
      gsap.set(containerRef.current, {
        yPercent: (-100 / sections.length) * initialIndex,
        onComplete: () => {
          lastTriggerTime.current = Date.now();
        },
      });
    }

    sectionsRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.set(ref.current, {
          opacity: index === initialIndex ? 1 : 0,
        });
      }
    });
  }, [initialIndex, sectionsRefs]);

  const animateToIndex = useCallback(
    (to: number) => {
      if (
        !containerRef.current ||
        isAnimating ||
        to === currentIndex ||
        to < 0 ||
        to >= sections.length
      )
        return;

      const now = Date.now();
      if (now - lastTriggerTime.current < 200) return;
      lastTriggerTime.current = now;

      setIsAnimating(true);
      setVisualIndex(to);

      // アニメーション: スライドと中身フェード
      const completeAll = () => {
        setCurrentIndex(to);
        window.history.replaceState(
          null,
          "",
          sections[to].id === "about" ? "/about" : `/about/${sections[to].id}`,
        );
        setIsAnimating(false);
      };

      sectionsRefs.forEach((ref, index) => {
        if (ref.current) {
          gsap.to(ref.current, {
            opacity: index === to ? 1 : 0,
            duration: 0.6,
            ease: "power4.inOut",
          });
        }
      });

      gsap.to(containerRef.current, {
        yPercent: (-100 / sections.length) * to,
        duration: 0.6,
        ease: "power4.inOut",
        onComplete: completeAll,
      });
    },
    [currentIndex, isAnimating, sectionsRefs],
  );

  useEffect(() => {
    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: 1,
      onUp: () => !isAnimating && animateToIndex(currentIndex - 1),
      onDown: () => !isAnimating && animateToIndex(currentIndex + 1),
      preventDefault: true,
      tolerance: 1000,
    });

    return () => observer.kill();
  }, [currentIndex, animateToIndex, isAnimating]);

  return (
    <Box sx={{ overflow: "hidden", width: "100vw", height: "100vh", position: "relative" }}>
      {/* 各セクションの背景 */}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: `${sections.length * 100}vh`,
        }}
      >
        {sections.map((section, index) => (
          <Box
            key={section.id}
            sx={{
              flex: "0 0 100vh",
              width: "100vw",
              bgcolor: `hsl(${(index * 70) % 360}, 80%, 85%)`,
            }}
          />
        ))}
      </Box>

      {/* セクションコンポーネント */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 50,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          const ref = sectionsRefs[index];

          return (
            <Box
              key={section.id}
              ref={ref}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <SectionComponent />
            </Box>
          );
        })}
      </Box>

      {/* インジケーター */}
      <Stack
        direction="column"
        spacing={1.5}
        sx={{
          position: "fixed",
          top: "50%",
          right: 30,
          transform: "translateY(-50%)",
          zIndex: 100,
        }}
      >
        {sections.map((_, i) => (
          <Box
            key={i}
            onClick={() => animateToIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: i === visualIndex ? "#000" : "#ccc",
              cursor: i === visualIndex ? "default" : "pointer",
              transition: "background 0.3s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
