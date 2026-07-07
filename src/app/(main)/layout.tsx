import * as React from "react";
import MainLayout from "@/app/(main)/_components/main-layout";
import FogGround from "@/app/(main)/_components/fog-ground";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <FogGround />
      <MainLayout>{children}</MainLayout>
    </>
  );
}
