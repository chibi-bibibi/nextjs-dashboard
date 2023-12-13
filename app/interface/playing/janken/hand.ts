const dir = String(process.env.BACKEND_URL)

export interface Hands {
  id: Number;
  text: string;
  playerImage: string;
  npcImage: string;
}

export const hands = [
  { id: 0, text: '未選択', playerImage: '', npcImage: '' },
  {
    id: 1,
    text: 'グー',
    playerImage: 'janken/zyanken_nekonogu-.png',
    npcImage: 'janken/doubutu_tanukinozyanken_gu.png',
  },
  {
    id: 2,
    text: 'チョキ',
    playerImage: 'janken/zyanken_nekonotyoki.png',
    npcImage: 'janken/doubutu_tanukinozyanken_tyoki.png',
  },
  {
    id: 3,
    text: 'パー',
    playerImage: 'janken/zyanken_nekonopa-.png',
    npcImage: 'janken/doubutu_tanukinozyanken_pa.png',
  },
];
