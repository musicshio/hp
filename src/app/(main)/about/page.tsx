import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { SocialButton } from "@/app/(main)/about/_components/social-button";
import { SiGithub, SiX, SiYoutube, SiZenn } from "react-icons/si";

export default function Page() {
  return (
    <Stack alignItems={"center"} spacing={2}>
      <Typography variant="h2">About</Typography>
      <Typography variant="h5">Introduction</Typography>
      <Typography variant="body1"></Typography>

      <Typography variant="h5">Socials</Typography>
      <Stack direction={"row"} spacing={2}>
        <SocialButton name={"X"} icon={<SiX />} href={"https://x.com/music_shio"} />
        <SocialButton
          name={"YouTube"}
          icon={<SiYoutube />}
          href={"https://www.youtube.com/@music_shio"}
        />
        <SocialButton name={"note"} icon={<SiX />} href={"https://note.com/music_shio"} />
        <SocialButton name={"GitHub"} icon={<SiGithub />} href={"https://github.com/musicshio"} />
        <SocialButton name={"Zenn"} icon={<SiZenn />} href={"https://zenn.dev/music_shio"} />
      </Stack>
    </Stack>
  );
}
