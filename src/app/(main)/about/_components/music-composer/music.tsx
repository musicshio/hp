"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import { SiSoundcloud, SiYoutube } from "react-icons/si";
import { SocialButton } from "@/app/(main)/about/_components/social-button";
import Offset from "../Offset";

export default function Music() {
  return (
    <Box width={"100%"} pt={4}>
      <Offset />
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
