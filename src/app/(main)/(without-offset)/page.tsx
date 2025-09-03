import { Box, Container, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <Box
      position={"fixed"}
      width={"100dvw"}
      height={"100dvh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      top={0}
    >
      <Container>
        <Stack spacing={6} alignItems={"center"}>
          <Typography variant={"h3"}>music_shio</Typography>
          <Typography variant={"body2"} color={"text.secondary"}>
            文脈の波にかき消されそうな実在の温かさにスポットライトを。
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
