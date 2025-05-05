"use client";

import { Box, Button, Modal } from "@mui/material";
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
      <Box
        sx={{
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
        <Button variant="contained" onClick={handleClose}>
          閉じる
        </Button>
      </Box>
    </Modal>
  );
}
