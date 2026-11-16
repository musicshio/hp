"use client";

import { useColorScheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { writeOverride } from "@/lib/day-night";
import { Brightness1, Brightness2 } from "@mui/icons-material";

export default function ModeToggle() {
  const { mode, setMode, systemMode } = useColorScheme();

  // 手動の切り替えは、次の昼夜の境目まで時刻による自動判定より優先される
  const toggleColorMode = () => {
    const current = mode === "system" ? systemMode : mode;
    const next = current === "dark" ? "light" : "dark";
    writeOverride(next, new Date());
    setMode(next);
  };
  return (
    <IconButton onClick={toggleColorMode} color="inherit" size={"small"}>
      {mode === "dark" ? <Brightness2 fontSize={"small"} /> : <Brightness1 fontSize={"small"} />}
    </IconButton>
  );
}
