"use client";
import * as React from "react";
import { useState } from "react";
import { Box, Stack, StackProps } from "@mui/system";
import Nav from "@/app/(main)/_components/nav";
import { AppBar, Divider, Drawer, Paper, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ModeSwitcher from "../nav/ModeSwitcher";
import Logo from "@/components/logo";

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

export default function Index({ children }: { children: React.ReactNode }) {
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
            variant={"outlined"}
            sx={{
              borderRadius: 2,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              webkitBackdropFilter: "blur(10px)",
            }}
            height={"100%"}
            position={"relative"}
          >
            <Box p={2}>
              <Logo height={"50px"} />
            </Box>
            <Divider />
            <Nav />
            <Box position={"absolute"} bottom={0} p={2}>
              <ModeSwitcher />
            </Box>
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
          <AppBar
            component={Box}
            position="sticky"
            elevation={3}
            borderRadius={2}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              webkitBackdropFilter: "blur(10px)",
            }}
            enableColorOnDark
          >
            <Toolbar>
              <Box width={"100%"} display="flex" justifyContent="center" alignItems="center">
                <Logo width={"40px"} height={"40px"} />
              </Box>
              <Box right={8} position={"absolute"}>
                <IconButton
                  aria-label="menu"
                  onClick={() => {
                    setIsDrawerOpen(true);
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {children}
          <Drawer
            variant="temporary"
            open={isDrawerOpen}
            anchor={"right"}
            onClose={() => {
              setIsDrawerOpen(false);
            }}
            PaperProps={{
              sx: {
                backdropFilter: "blur(10px)",
                webkitBackdropFilter: "blur(10px)",
              },
            }}
            slotProps={{
              backdrop: {
                sx: {
                  backdropFilter: "blur(3px)",
                  webkitBackdropFilter: "blur(3px)",
                },
              },
            }}
          >
            <Stack width={"240px"}>
              <Stack p={2} direction={"row"}>
                <Logo />
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
              <Box position={"absolute"} bottom={0} p={2}>
                <ModeSwitcher />
              </Box>
            </Stack>
          </Drawer>
        </StyledStack>
      </Box>
    </>
  );
}
