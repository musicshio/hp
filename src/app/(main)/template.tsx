"use client";
import React, { unstable_ViewTransition as ViewTransition } from "react";

/**
 * ページの中身。ページを移るとき、前のページと次のページを View Transition で重ねて入れ替える。
 * ヘッダーと霧はこの外（layout）にあるので、遷移のあいだも途切れずに残る。
 * ページの題は Heading が別の名前で受け持ち、同じ位置で文字だけが入れ替わる。
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition default="page">
      <div>{children}</div>
    </ViewTransition>
  );
}
