export enum ProductType {
  YOUTUBE = "YOUTUBE",
  EXTERNAL = "EXTERNAL",
}

export type Product = {
  id: string;
  img: string;
  type: string;
  title: string;
  tags: string[];
  year: number;
  youtubeId?: string | null;
  externalUrl?: string | null;
};
export const productData: Product[] = [
  {
    id: "tokyo-shandy-randevouz",
    img: "/images/tokyo-shandy-randevouz.png",
    type: ProductType.YOUTUBE,
    youtubeId: "7qyZWwgqGf8",
    title: "トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ - MAISONdes",
    tags: ["cover"],
    year: 2023,
  },
  {
    id: "gogo",
    img: "/images/gogo.jpg",
    type: ProductType.YOUTUBE,
    youtubeId: "uYJMmYAD45w",
    title: "ゴーゴー幽霊船 - 米津玄師",
    tags: ["cover"],
    year: 2021,
  },
  {
    id: "human",
    img: "/images/human.jpg",
    type: ProductType.YOUTUBE,
    youtubeId: "jE6Blb8wf5U",
    title: "ヒトと人間",
    tags: ["original"],
    year: 2023,
  },
  {
    img: "/images/kangaeru-okayama.png",
    id: "kangaeru-okayama",
    type: ProductType.EXTERNAL,
    externalUrl: "https://www.nhk.or.jp/okayama/special/kangaeru/",
    title: "NHK岡山『考える岡山』",
    year: 2022,
    tags: ["ロゴ制作", "CGアニメーション制作", "音楽制作"],
  },
  {
    img: "/images/kangaeru-tottori.png",
    id: "okayama-hare-butai",
    type: ProductType.EXTERNAL,
    externalUrl: "https://www.nhk.or.jp/tottori/kangaeru/",
    title: "NHK岡山『考える鳥取』",
    year: 2023,
    tags: ["ロゴ制作"],
  },
  {
    img: "/images/header.png",
    id: "portforio",
    type: ProductType.EXTERNAL,
    externalUrl: "/",
    title: "ポートフォリオ",
    year: 2022,
    tags: ["Webデザイン", "実装"],
  },
];
