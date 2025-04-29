import { Button } from "@mui/material";
import { ReactNode } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export type SocialButtonProps = {
  name: string;
  icon: ReactNode;
  href: string;
};

export function SocialButton({ name, icon, href }: SocialButtonProps) {
  return (
    <Button
      variant={"outlined"}
      color={"secondary"}
      size={"large"}
      startIcon={icon}
      endIcon={<ArrowOutwardIcon />}
      href={href}
      target={"_blank"}
      sx={{
        textTransform: "none",
      }}
    >
      {name}
    </Button>
  );
}
