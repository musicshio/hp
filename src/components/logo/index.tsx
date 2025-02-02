import { Box } from "@mui/system";
import { BoxProps } from "@mui/system/Box/Box";

export type LogoProps = BoxProps;
export default function Logo(props: LogoProps) {
  return (
    <Box
      {...props}
      sx={[
        (theme) => ({
          backgroundImage: "url(/images/shio_logo_black.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }),
        (theme) =>
          theme.applyStyles("dark", {
            backgroundImage: "url(/images/shio_logo_white.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }),
      ]}
    />
  );
}
