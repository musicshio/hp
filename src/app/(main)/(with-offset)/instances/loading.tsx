"use client";
import { Box, Fade } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function Loading() {
  const { mode } = useColorScheme();

  const bgColor = mode === "dark" ? "#222" : "#ddd";
  const color = mode === "dark" ? "#fff" : "#000";

  return <></>;

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Fade in={true} unmountOnExit>
        <Box
          sx={{
            width: "60px",
            height: "10px",
            WebkitMask: `linear-gradient(90deg,${color} 70%,${color}0 0) left/20% 100%`,
            background: `linear-gradient(${color} 0 0) left -25% top 0 /20% 100% no-repeat ${bgColor}`,
            animation: "l7 1s infinite steps(6)",
            "@keyframes l7": {
              "100%": { backgroundPosition: "right -25% top 0" },
            },
          }}
        />
      </Fade>
    </Box>
  );
}
