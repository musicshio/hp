"use client";
import { Box } from "@mui/system";
import { useColorScheme } from "@mui/material/styles";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const handleChange = (event: React.MouseEvent<HTMLElement>, newMode: string) => {
    console.log(newMode);
    setMode(newMode as "light" | "system" | "dark");
  };
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "56px",
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={mode}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="system">System</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}