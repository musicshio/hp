"use client";

import { Box, Stack, Tooltip } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

import Hero from "@/app/(main)/about/_components/hero";
import WebEngineer from "./web-engineer/web-engineer";
import Music from "@/app/(main)/about/_components/music-composer/music";

gsap.registerPlugin(Observer);

type SlideType = "hero" | "web" | "music";

export type VerticalSlidesProps = {
  initialSlide: SlideType;
};

export default function VerticalSlides({ initialSlide }: VerticalSlidesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(
    () => [
      { id: "hero", path: "/about", ref: heroRef },
      { id: "web", path: "/about/web", ref: webRef },
      { id: "music", path: "/about/music", ref: musicRef },
    ],
    [],
  );

  const initialIndex = sections.findIndex((s) => s.id === initialSlide);

  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);
  const isAnimatingRef = useRef(false);

  const scrollToIndex = (index: number) => {
    if (isAnimatingRef.current || index < 0 || index >= sections.length) return;

    isAnimatingRef.current = true;
    currentIndexRef.current = index;
    setCurrentIndex(index);

    const section = sections[index];
    section.ref.current?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", section.path);

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const observer = Observer.create({
      target: containerRef.current!,
      type: "wheel,touch,pointer",
      preventDefault: true,
      tolerance: 100,
      lockAxis: true,
      allowClicks: true,
      onDown: () => scrollToIndex(currentIndexRef.current + 1),
      onUp: () => scrollToIndex(currentIndexRef.current - 1),
    });

    return () => observer.kill();
  }, [sections]);

  useEffect(() => {
    const current = sections[currentIndexRef.current]?.ref.current;
    current?.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "100dvh",
        width: "100dvw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {sections.map(({ ref }, i) => (
        <Box
          key={i}
          ref={ref}
          sx={{
            minHeight: "100dvh",
            py: 10,
            px: 4,
          }}
        >
          {i === 0 && <Hero />}
          {i === 1 && <WebEngineer />}
          {i === 2 && <Music />}
        </Box>
      ))}

      {/* Indicator */}
      <Indicator sections={sections} currentIndex={currentIndex} onSelect={scrollToIndex} />
    </Box>
  );
}

type IndicatorProps = {
  sections: { id: string; path: string }[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

function Indicator({ sections, currentIndex, onSelect }: IndicatorProps) {
  return (
    <Stack
      spacing={1.5}
      position="fixed"
      top="50%"
      right="1.5rem"
      zIndex={999}
      sx={{
        transform: "translateY(-50%)",
        alignItems: "center",
      }}
    >
      {sections.map((section, i) => {
        const isActive = currentIndex === i;

        return (
          <Tooltip key={section.path} title={section.id.toUpperCase()} placement="left">
            <Box
              onClick={() => onSelect(i)}
              sx={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                borderRadius: "50%",
                backgroundColor: isActive ? "#000" : "#ccc",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          </Tooltip>
        );
      })}
    </Stack>
  );
}
