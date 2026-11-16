/**
 * 訪問者の現地時刻に合わせて昼(light)/夜(dark)を決める。
 * 手動で切り替えた場合は、次の昼夜の境目まではその選択を優先する。
 */

export const DAY_START_HOUR = 6;
export const NIGHT_START_HOUR = 18;

export const OVERRIDE_STORAGE_KEY = "hp-mode-override";
/** MUI が mode を保存しているキー（InitColorSchemeScript の既定値） */
export const MUI_MODE_STORAGE_KEY = "mui-mode";

export type DayNightMode = "light" | "dark";

type Override = { mode: DayNightMode; until: number };

export function modeForDate(date: Date): DayNightMode {
  const hour = date.getHours();
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "light" : "dark";
}

/** 次に昼夜が切り替わる時刻 */
export function nextBoundary(date: Date): Date {
  const next = new Date(date);
  next.setMinutes(0, 0, 0);
  const hour = date.getHours();
  if (hour < DAY_START_HOUR) {
    next.setHours(DAY_START_HOUR);
  } else if (hour < NIGHT_START_HOUR) {
    next.setHours(NIGHT_START_HOUR);
  } else {
    next.setDate(next.getDate() + 1);
    next.setHours(DAY_START_HOUR);
  }
  return next;
}

export function readOverride(now: Date): DayNightMode | null {
  try {
    const raw = localStorage.getItem(OVERRIDE_STORAGE_KEY);
    if (!raw) return null;
    const override = JSON.parse(raw) as Override;
    if ((override.mode === "light" || override.mode === "dark") && override.until > now.getTime()) {
      return override.mode;
    }
    localStorage.removeItem(OVERRIDE_STORAGE_KEY);
  } catch {
    // localStorage が使えない環境では時刻のみで決める
  }
  return null;
}

export function writeOverride(mode: DayNightMode, now: Date) {
  try {
    const override: Override = { mode, until: nextBoundary(now).getTime() };
    localStorage.setItem(OVERRIDE_STORAGE_KEY, JSON.stringify(override));
  } catch {
    // 保存できなくても表示上の切り替えは行われる
  }
}

export function resolveMode(now: Date): DayNightMode {
  return readOverride(now) ?? modeForDate(now);
}

/**
 * 描画前に実行するスクリプト。MUI の InitColorSchemeScript より先に置き、
 * MUI が読む localStorage の値を「いまの昼夜」に合わせておくことでちらつきを防ぐ。
 */
export const dayNightInitScript = `(function(){try{
var now=new Date(),h=now.getHours();
var mode=(h>=${DAY_START_HOUR}&&h<${NIGHT_START_HOUR})?"light":"dark";
var raw=localStorage.getItem(${JSON.stringify(OVERRIDE_STORAGE_KEY)});
if(raw){var o=JSON.parse(raw);
if((o.mode==="light"||o.mode==="dark")&&o.until>now.getTime()){mode=o.mode}
else{localStorage.removeItem(${JSON.stringify(OVERRIDE_STORAGE_KEY)})}}
localStorage.setItem(${JSON.stringify(MUI_MODE_STORAGE_KEY)},mode);
}catch(e){}})();`;
