import * as React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";

export default function Page() {
  return (
    <Stack alignItems={"center"} pt={16} spacing={20}>
      <Typography variant={"h4"} letterSpacing={4}>
        文脈の波にかき消されそうな実在の温かさにスポットライトを。
      </Typography>
      <Typography>music_shio</Typography>
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        sx={{
          "& > *": {
            border: "none",
            color: "text.secondary",
            fontSize: "1.5rem",
          },
        }}
      >
        <Button component={Link} href="instances">
          Instances
        </Button>
        <Button component={Link} href="fragments">
          Fragments
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
