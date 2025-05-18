"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Box, Container, Stack, Typography } from "@mui/material";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Hero() {
  const boxRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    // Split text into characters
    const split = new SplitText(boxRef.current, {
      type: "chars",
      charsClass: "char", // for debugging/styling if needed
    });

    gsap.fromTo(
      split.chars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        duration: 0.001,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 40%",
          markers: false,
        },
      },
    );

    // Cleanup to restore original HTML
    return () => {
      split.revert();
    };
  }, []);

  return (
    <Box ref={boxRef} width={"100%"} height={"100dvh"}>
      <Container>
        <Stack spacing={4} alignItems={"center"} mb={2}>
          <Typography variant={"h4"}>music_shio</Typography>
          <Box>アカデミアと社会の隙間に落っこちた曖昧なアーティストです。</Box>
          <Box>
            composer, arranger, singer, designer, engineer, executive, bioinformatics scientist,
            philosopher.
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
