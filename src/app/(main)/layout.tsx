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
      <MainLayout>
        {/* 最初に開いたときだけ、中身がゆっくり現れる。ページを移るときの入れ替えは template が受け持つ */}
        <div className="site-enter">{children}</div>
      </MainLayout>
    </>
  );
}
