import { Divider, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import List from "@mui/material/List";
import NextLink from "next/link";
import { Box } from "@mui/system";
import ModeSwitcher from "./ModeSwitcher";

export default function Nav() {
  return (
    <Paper elevation={3} component={Box} width={200}>
      <List component="nav" aria-labelledby="navbar">
        <ListItemButton>
          <ListItemText primary="music_shio" />
        </ListItemButton>
        <Divider />
        <ListItemButton component={NextLink} href={"/"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={NextLink} href={"/acapella"}>
          <ListItemIcon>
            <MicIcon />
          </ListItemIcon>
          <ListItemText primary="A capella" />
        </ListItemButton>
        <ListItemButton component={NextLink} href={"/design"}>
          <ListItemIcon>
            <DesignServicesIcon />
          </ListItemIcon>
          <ListItemText primary="Design" />
        </ListItemButton>
        <ListItemButton component={NextLink} href={"/music"}>
          <ListItemIcon>
            <LibraryMusicIcon />
          </ListItemIcon>
          <ListItemText primary="Music" />
        </ListItemButton>
        <ListItemButton component={NextLink} href={"/engineering"}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Code" />
        </ListItemButton>
        <ModeSwitcher />
      </List>
    </Paper>
  );
}
