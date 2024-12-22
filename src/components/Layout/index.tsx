"use client";
import * as React from "react";
import { useState } from "react";
import { Box, Stack, StackProps } from "@mui/system";
import Nav from "@/components/Nav";
import { AppBar, Divider, Drawer, Paper, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// const StyledStack = styled(Stack)({
//   height: "100dvh",
//   width: "100dvw",
//   boxSizing: "border-box",
//   sx: { padding: 1, overflowX: "hidden" },
//   padding: "theme.spacing(1)",
// });

function StyledStack({ children, ...props }: StackProps) {
  return (
    <Stack
      height="100dvh"
      width="100dvw"
      boxSizing="border-box"
      sx={{ padding: 1, overflowX: "hidden" }}
      padding={1}
      spacing={2}
      {...props}
    >
      {children}
    </Stack>
  );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Box
        display={{
          xs: "none",
          sm: "block",
        }}
      >
        <StyledStack direction={"row"}>
          <Paper
            elevation={3}
            component={Box}
            minWidth={"200px"}
            sx={{
              borderRadius: 2,
            }}
          >
            <Stack p={2} direction={"row"}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                music_shio
              </Typography>
            </Stack>
            <Divider />
            <Nav />
          </Paper>
          {children}
        </StyledStack>
      </Box>
      <Box
        display={{
          xs: "block",
          sm: "none",
        }}
      >
        <StyledStack direction={"column"}>
          <AppBar component={Box} position="sticky" elevation={3} borderRadius={2}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                music_shio
              </Typography>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setIsDrawerOpen(true);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {children}
          <Drawer
            variant="temporary"
            open={isDrawerOpen}
            anchor={"right"}
            hideBackdrop
            onClose={() => {
              setIsDrawerOpen(false);
            }}
          >
            <Stack width={"100dvw"}>
              <Stack p={2} direction={"row"}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  music_shio
                </Typography>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  <CloseIcon fontSize={"small"} />
                </IconButton>
              </Stack>
              <Divider />
              <Nav />
            </Stack>
          </Drawer>
        </StyledStack>
      </Box>
    </>
  );
}