"use client";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import List from "@mui/material/List";
import NextLink from "next/link";
import ModeSwitcher from "./ModeSwitcher";

export default function Nav() {
  return (
    <List component="nav" aria-labelledby="navbar">
      <ListItemButton component={NextLink} href={"/"}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
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
      <ListItemButton component={NextLink} href={"/code"}>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Code" />
      </ListItemButton>
      <ModeSwitcher />
    </List>
  );
}
