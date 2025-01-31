import * as React from "react";
import Index from "@/app/(main)/_components/main-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Index>{children}</Index>;
}
