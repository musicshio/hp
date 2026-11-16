"use client";

import { useEffect } from "react";
import { useColorScheme } from "@mui/material/styles";
import { nextBoundary, resolveMode } from "@/lib/day-night";

const MAX_TIMEOUT = 2 ** 31 - 1;

/** 開いたままのページでも、昼夜の境目を越えたら表示を切り替える */
export default function DayNightSync() {
  const { setMode } = useColorScheme();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const sync = () => {
      const now = new Date();
      setMode(resolveMode(now));
      clearTimeout(timer);
      const wait = nextBoundary(now).getTime() - now.getTime() + 1000;
      timer = setTimeout(sync, Math.min(wait, MAX_TIMEOUT));
    };

    const onVisible = () => {
      if (document.visibilityState === "visible") sync();
    };

    sync();
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [setMode]);

  return null;
}
