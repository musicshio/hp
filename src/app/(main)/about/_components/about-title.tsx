"use client";

import { usePathname } from "next/navigation";
import { Box } from "@mui/material";
import Offset from "@/app/(main)/about/_components/Offset";
import Heading from "@/app/(main)/_components/heading";

/**
 * About の題。ほかのページと同じ位置に出す。
 * スライドの中（NoSsr の内側）に置くと、ページを移るときの View Transition に間に合わないので、外に置いている。
 * Web と Music のスライドにはそれぞれの見出しがあるので、最初のスライド（/about）のときだけ見せる。
 */
export default function AboutTitle() {
  const visible = usePathname() === "/about";

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      zIndex={1}
      sx={{ pointerEvents: "none", opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
    >
      <Offset />
      <Heading text="About" />
    </Box>
  );
}
