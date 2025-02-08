"use client";
import { Container, Modal, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Box } from "@mui/system";

export type WorkModalProps = {
  children: ReactNode;
};
export default function WorkModal({ children }: WorkModalProps) {
  const router = useRouter();
  return (
    <Modal
      open={true}
      sx={{
        display: "flex",
        p: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      onClose={() => router.back()}
    >
      <Container
        sx={{
          borderRadius: "16px",
        }}
        component={Paper}
      >
        <Box p={4}>{children}</Box>
      </Container>
    </Modal>
  );
}
