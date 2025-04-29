import * as React from "react";
import MainLayout from "@/app/(main)/_components/main-layout";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
