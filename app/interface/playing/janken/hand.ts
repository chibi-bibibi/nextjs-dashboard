import { getImageSrc } from '@/app/utils/getImagePath';

export interface Hands {
  id: Number;
  text: string;
  playerImage: string;
  npcImage: string;
}

export const hands = [
  {
    id: 0,
    text: '未選択',
    playerImage: '',
    npcImage: getImageSrc('janken/doubutu_tanuki_karada.png', 'playing'),
  },
  {
    id: 1,
    text: 'グー',
    playerImage: getImageSrc('janken/zyanken_nekonogu-.png', 'playing'),
    npcImage: getImageSrc('janken/doubutu_tanukinozyanken_gu.png', 'playing'),
  },
  {
    id: 2,
    text: 'チョキ',
    playerImage: getImageSrc('janken/zyanken_nekonotyoki.png', 'playing'),
    npcImage: getImageSrc(
      'janken/doubutu_tanukinozyanken_tyoki.png',
      'playing',
    ),
  },
  {
    id: 3,
    text: 'パー',
    playerImage: getImageSrc('janken/zyanken_nekonopa-.png', 'playing'),
    npcImage: getImageSrc('janken/doubutu_tanukinozyanken_pa.png', 'playing'),
  },
];
