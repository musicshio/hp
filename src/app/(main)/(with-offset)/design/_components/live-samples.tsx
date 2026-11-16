"use client";

import { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material/styles";
import Logo from "@/components/logo";
import ModeToggle from "@/app/(main)/_components/mode-toggle";
import { DAY_START_HOUR, NIGHT_START_HOUR, modeForDate, nextBoundary } from "@/lib/day-night";

const pad = (n: number) => String(n).padStart(2, "0");
const clock = (date: Date) => `${pad(date.getHours())}:${pad(date.getMinutes())}`;

/** いまの現地時刻と、それによって決まる昼夜を表示する */
export function DayNightStatus() {
  const { mode } = useColorScheme();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  // 時刻はブラウザでしか分からないので、読み込み後に表示する
  if (!now) return <p className="text-muted-foreground text-sm">現地時刻を確認しています。</p>;

  const byClock = modeForDate(now);
  const shown = mode === "dark" ? "dark" : "light";
  const label = (m: "light" | "dark") => (m === "light" ? "昼" : "夜");

  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
      <dt className="text-muted-foreground">あなたの現地時刻</dt>
      <dd>{clock(now)}</dd>
      <dt className="text-muted-foreground">時刻から決まる表示</dt>
      <dd>{label(byClock)}</dd>
      <dt className="text-muted-foreground">いまの表示</dt>
      <dd>
        {label(shown)}
        {shown !== byClock && `（手動で切り替え中。${clock(nextBoundary(now))} に時刻どおりへ戻ります）`}
      </dd>
      <dt className="text-muted-foreground">次の切り替わり</dt>
      <dd>{clock(nextBoundary(now))}</dd>
      <dt className="text-muted-foreground">境目</dt>
      <dd>
        {pad(DAY_START_HOUR)}:00 に昼、{pad(NIGHT_START_HOUR)}:00 に夜
      </dd>
    </dl>
  );
}

export function LogoSample() {
  return <Logo height={"48px"} width={"64px"} />;
}

export function ModeToggleSample() {
  return <ModeToggle />;
}
