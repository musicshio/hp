"use client";

import { Button, Container, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal open onClose={handleClose}>
      <Container
        sx={{
          minHeight: "80%",
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          minWidth: 300,
        }}
      >
        {children}
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{
            position: "fixed",
            bottom: 24,
          }}
        >
          閉じる
        </Button>
      </Container>
    </Modal>
  );
}
