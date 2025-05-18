"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Box, Container, Stack, Typography } from "@mui/material";
import { SocialButton } from "@/app/(main)/about/_components/social-button";
import { SiSoundcloud, SiYoutube } from "react-icons/si";
import { useColorScheme } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Music() {
  const boxRef = useRef(null);
  const { mode } = useColorScheme();

  // Using useGSAP to run animation on mount
  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: 50,
        size: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <Box
      ref={boxRef}
      width={"100%"}
      minHeight={"100dvh"}
      overflow={"hidden"}
      pt={4}
      bgcolor={mode === "dark" ? cyan[900] : cyan[50]}
    >
      <Container>
        <Stack direction={"row"} spacing={4} alignItems={"center"} mb={2}>
          <Typography variant={"h4"}>Music Composer</Typography>
          <Stack direction={"row"} spacing={1}>
            <SocialButton
              name={"YouTube"}
              icon={<SiYoutube />}
              href={"https://www.youtube.com/@music_shio"}
            />
            <SocialButton
              name={"SoundCloud"}
              icon={<SiSoundcloud />}
              href={"https://soundcloud.com/music_shio"}
            />
          </Stack>
        </Stack>
        <Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?si=vW4k7CKzxlsrBqKJ&amp;list=PLAv_m2Lpx_eD9bQAmHfKX-zlA4m6yxZzL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
}

type SkillItemProps = {
  title: string;
  imgSrc: string;
};

function SkillItem({ title, imgSrc }: SkillItemProps) {
  return (
    <Box>
      <Typography variant={"h6"}>{title}</Typography>
      <img
        src={imgSrc}
        style={{
          maxWidth: "100%",
        }}
        alt={title}
      />
    </Box>
  );
}
