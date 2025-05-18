import { useEffect, useRef } from "react";
import { Highlight, HighlightProps } from "prism-react-renderer";
import { Box, Paper } from "@mui/material";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

gsap.registerPlugin(SplitText);

export type AnimatedCodeBlockProps = {
  theme: HighlightProps["theme"];
  code: HighlightProps["code"];
  language: HighlightProps["language"];
};

export default function AnimatedCodeBlock({ theme, code, language }: AnimatedCodeBlockProps) {
  const codeContainerRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (!codeContainerRef.current) return;

    // Split text into characters
    const split = new SplitText(codeContainerRef.current, {
      type: "chars",
      charsClass: "char", // for debugging/styling if needed
    });

    gsap.fromTo(
      split.chars,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.03,
        ease: "none",
        duration: 0.001,
        scrollTrigger: {
          trigger: codeContainerRef.current,
          start: "top 40%",
          markers: false,
        },
      },
    );

    // Cleanup to restore original HTML
    return () => {
      split.revert();
    };
  }, []);

  return (
    <Highlight theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          component={Paper}
          sx={{
            padding: 2,
            borderRadius: 4,
            overflowX: "auto",
            fontSize: "0.875rem",
          }}
          style={style}
        >
          <pre
            ref={codeContainerRef}
            className={robotoMono.className}
            style={{
              whiteSpace: "pre-wrap",
              counterReset: "line-number",
            }}
          >
            {tokens.map((line, i) => (
              <Box
                key={i}
                {...getLineProps({ line })}
                sx={{
                  position: "relative",
                  paddingLeft: "2em",
                  marginLeft: 0,
                  counterIncrement: "line-number",
                  fontFamily: "inherit",
                  "&::before": {
                    content: "counter(line-number)",
                    position: "absolute",
                    left: 0,
                    width: "1em",
                    textAlign: "right",
                    color: "#888",
                    paddingRight: "0.5em",
                    userSelect: "none",
                  },
                }}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </Box>
            ))}
          </pre>
        </Box>
      )}
    </Highlight>
  );
}
