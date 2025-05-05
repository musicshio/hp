"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Box, Paper } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function AnimatedBox() {
  const boxRef = useRef(null);

  // Using useGSAP to run animation on mount
  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: 200,
        size: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 50%",
          end: "top 10%",
          scrub: true,
          // markers: true,
        },
      },
    );
  }, []);

  return (
    <Box component={Paper} ref={boxRef} elevation={1} width={"100%"} height={"100dvh"}>
      I&#39;m animated!
    </Box>
  );
}
