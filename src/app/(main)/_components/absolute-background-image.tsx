import { Box } from "@mui/system";
import * as React from "react";
import { BoxProps } from "@mui/system/Box/Box";

export type AbsoluteBackgroundImageProps = {
  src: string;
} & BoxProps;
export default function AbsoluteBackgroundImage({
  src,
  ...rest
}: AbsoluteBackgroundImageProps): JSX.Element {
  return (
    <Box
      {...rest}
      sx={{
        zIndex: -1,
        position: "absolute",
        height: "100vh",
        width: "100vw",
        left: 0,
        top: 0,
        backgroundImage: `url(/images/${src})`,
        opacity: 0.4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
