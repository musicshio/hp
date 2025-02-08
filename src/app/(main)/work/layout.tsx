import { ReactNode } from "react";

type LayoutProps = {
  modal: ReactNode;
  children: ReactNode;
};
export default function Layout({ modal, children }: LayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
