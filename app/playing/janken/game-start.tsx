'use client';

import { Hands, hands } from '@/app/interface/playing/janken/hand';
import { useState } from 'react';
import Result from './game-result';

const Start = (props: { choiseHand: Hands }) => {
  const player = props.choiseHand;
  const [npcHand, setNpcHand] = useState(hands[0]);
  const [result, setResult] = useState('');

  const handleClick = () => {
    const npc = hands[Math.floor(Math.random() * 3) + 1];
    setNpcHand(npc);

    if (player.id === npc.id) {
      setResult('あいこ！');
    } else if (
      (player.id === 1 && npc.id === 2) ||
      (player.id === 2 && npc.id === 3) ||
      (player.id === 3 && npc.id === 1)
    ) {
      setResult('あなたの勝ち！');
    } else {
      setResult('NPCの勝ち！');
    }
    console.log(player, npc);
    return;
  };

  return (
    <>
      <div className="flex justify-center gap-20 p-6 px-8 text-2xl font-bold text-blue">
        <p className="w-64">あなたの選択：{player.text}</p>
        <button
          disabled={player.id === 0}
          onClick={() => handleClick()}
          className="disabled:bg-red_dark h-12 w-56 rounded bg-red hover:bg-red_light"
        >
          <p className="text-2xl font-bold text-default_dark">勝負する</p>
        </button>
        <p className="w-64">NPCの選択：{npcHand.text}</p>
      </div>

      <Result result={result} npcHand={npcHand} />
    </>
  );
};

export default Start;
