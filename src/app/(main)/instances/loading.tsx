"use client";
import { Box, Fade } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

export default function Loading() {
  const { mode } = useColorScheme();

  const bgColor = mode === "dark" ? "#222" : "#ddd";
  const color = mode === "dark" ? "#fff" : "#000";

  return (
    <Box
      width={"100dvw"}
      height={"100dvh"}
      position={"relative"}
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
// /* HTML: <div class="loader"></div> */
// .loader {
//   height: 60px;
//   aspect-ratio: 2/3;
//   --c:no-repeat linear-gradient(#fff 0 0);
//   background: var(--c), var(--c), var(--c), var(--c);
//   background-size: 50% 33.4%;
//   animation: l8 1.5s infinite linear;
// }
// @keyframes l8 {
//   0%,
//   5%   {background-position:0 25%,100% 25%,0 75%,100% 75%}
//   33%  {background-position:0 50%,100% 0,0 100%,100% 50%}
//   66%  {background-position:0 50%,0 0,100% 100%,100% 50%}
//   95%,
//   100% {background-position:0 75%,0 25%,100% 75%,100% 25%}
// }