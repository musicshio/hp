export enum InstanceType {
  YOUTUBE = "YOUTUBE",
  NOTE = "NOTE",
  OTHER = "OTHER",
}

type IInstance = {
  id: string;
  title: string;
  description: string;
  year: number;
  type: InstanceType;
  externalUrl: string;
};

export type Instance = YoutubeInstance | NoteInstance | OtherInstance;

export type YoutubeInstance = IInstance & {
  type: InstanceType.YOUTUBE;
  youtubeUrl: string;
};

export type NoteInstance = IInstance & {
  type: InstanceType.NOTE;
  noteUrl: string;
};

export type OtherInstance = IInstance & {
  type: InstanceType.OTHER;
  thumbnailUrl: string;
};

export const instances: Instance[] = [
  {
    id: "tokyo-shandy-rendezvous",
    title:
      "【アカペラカバー】トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ - MAISONdes covered by shio",
    description: "アカペラでカバーしたトウキョウ・シャンディ・ランデヴのパフォーマンス動画です。",
    type: InstanceType.YOUTUBE,
    year: 2023,
    externalUrl: "https://youtu.be/7qyZWwgqGf8",
    youtubeUrl: "https://www.youtube.com/embed/7qyZWwgqGf8",
  },
  {
    id: "kangaeru-okayama",
    title: "NHK岡山『考える岡山』ロゴ・オープニング映像",
    description:
      "NHK岡山放送局による教育動画コンテンツです。\nモーションロゴとオープニング映像(音楽、CG)を制作しました。",
    type: InstanceType.OTHER,
    thumbnailUrl: "/images/kangaeru-okayama.png",
    year: 2022,
    externalUrl: "https://www.nhk.or.jp/okayama/info/articles/310/002/01/",
  },
  {
    id: "non-existent-discipline",
    title: "無い学問",
    year: 2020,
    type: InstanceType.NOTE,
    description: "実在しない学問を勉強して中間テストに臨む謎解きです。",
    externalUrl: "https://note.com/music_shio/n/n6d154dd0cab0",
    noteUrl: "https://note.com/embed/notes/n6d154dd0cab0",
  },
  {
    id: "human",
    title: "ヒトと人間",
    year: 2023,
    description: `Hical Records 『ノアの箱庭 -Before The End SandboX』より
2023 秋M3 H-14b

作詞：桜井ひかる
作編曲：shio
ボーカル：shio`,
    type: InstanceType.YOUTUBE,
    externalUrl: "https://youtu.be/jE6Blb8wf5U",
    youtubeUrl: "https://www.youtube.com/embed/jE6Blb8wf5U",
  },
  {
    id: "paternality",
    title: "炬燵、贖宥、猫とパンダ、ナンセンス文学、(父性)",
    description: "俳句「夢色の炬燵 猫ちょっと詰めてね」とその解説記事です。",
    year: 2023,
    type: InstanceType.NOTE,
    externalUrl: "https://note.com/music_shio/n/ne77c48c6f2d0",
    noteUrl: "https://note.com/embed/notes/ne77c48c6f2d0",
  },
];
