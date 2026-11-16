import { Shippori_Mincho } from "next/font/google";

// トップのコピーで使っている書体（src/app/(main)/(without-offset)/page.tsx と同じ指定）
const shippori = Shippori_Mincho({ weight: ["400"], subsets: ["latin"], display: "swap" });

type Specimen = {
  name: string;
  where: string;
  /** 欧文の見本に使う書体と太さ */
  latin?: { family: string; weight: number };
  /** 和文の見本に使う書体 */
  japanese?: string;
};

const SPECIMENS: Specimen[] = [
  {
    name: "Zen Kaku Gothic New",
    where: "All pages",
    japanese: "var(--font-base)",
  },
  {
    name: "Space Grotesk",
    where: "Page titles",
    latin: { family: "var(--font-display)", weight: 700 },
  },
  {
    name: "Shippori Mincho",
    where: "Top",
    japanese: shippori.style.fontFamily,
  },
];

/** CONSTITUTION.md の本文と、このサイトで実際に使っている文字列で見せる */
export default function TypeSpecimens() {
  return (
    <div className="divide-y border-y">
      {SPECIMENS.map((specimen) => (
        <div key={specimen.name} className="py-10">
          <h3 className="font-medium">
            {specimen.name}
            <span className="text-muted-foreground ml-3 text-xs font-normal">{specimen.where}</span>
          </h3>

          {specimen.latin && (
            <p
              className="mt-6 text-5xl leading-none"
              style={{ fontFamily: specimen.latin.family, fontWeight: specimen.latin.weight }}
            >
              Instances
            </p>
          )}

          {specimen.japanese && (
            <div style={{ fontFamily: specimen.japanese }}>
              <p className="mt-8 text-2xl">実在への愛</p>
              <p className="mt-4 leading-loose">
                愛するというのは、対象を解釈し評価する主体が、客体としての対象に向ける感情ではない。それは観察者と対象の関係に閉じこもっている構図にすぎない。
              </p>
              <p className="mt-4 leading-loose">
                そうではなく、実在の側に、多様体上の一点として、無数の他の実在と並んで在ったうえで、他の実在に手を伸ばし続ける運動そのものが愛である。
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
