import { useColorScheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { Brightness1, Brightness2 } from "@mui/icons-material";

export default function ModeToggle() {
  const { mode, setMode, systemMode } = useColorScheme();

  const toggleColorMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else if (mode === "light") {
      setMode("dark");
    } else {
      setMode(systemMode === "dark" ? "light" : "dark");
    }
  };
  return (
    <IconButton onClick={toggleColorMode} color="inherit" size={"small"}>
      {mode === "dark" ? <Brightness2 fontSize={"small"} /> : <Brightness1 fontSize={"small"} />}
    </IconButton>
  );
}
