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
      size={"small"}
      startIcon={icon}
      endIcon={<ArrowOutwardIcon />}
      href={href}
      target={"_blank"}
      sx={{
        textTransform: "none",
        color: "text.primary",
        border: "1px solid",
        borderColor: "text.primary",
        "&:after": {
          position: "absolute",
          content: '""',
          width: 0,
          height: "100%",
          top: 0,
          right: 0,
          borderRadius: "3px",
          backgroundColor: "#fff",
          mixBlendMode: "difference",
          transition: "all 0.3s ease",
        },
        "&:hover:after": {
          left: 0,
          width: "100%",
        },
      }}
    >
      {name}
    </Button>
  );
}
