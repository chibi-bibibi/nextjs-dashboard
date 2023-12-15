'use client';

import { Hands, hands } from '@/app/interface/playing/janken/hand';
import { useState } from 'react';
import Result from './game-result';

const Start = (props: { choiseHand: Hands }) => {
  const player = props.choiseHand;
  const [npcHand, setNpcHand] = useState(hands[0]);
  const [result, setResult] = useState('');

  const PlayerChoise = () => {
    return (
      <p className="flex justify-center text-2xl font-bold text-blue sm:w-64 sm:mx-5 my-5">あなたの選択：{player.text}</p>
    )
  }

  const NpcChoise = () => {
    return (
      <p className="flex justify-center text-2xl font-bold text-blue sm:w-64 sm:mx-5 my-5">NPCの選択：{npcHand.text}</p>
    )
  }

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
      <div className="sm:flex items-center justify-center ">
        <PlayerChoise />
          <button
            disabled={player.id === 0}
            onClick={() => handleClick()}
            className="flex justify-center mx-auto sm:w-56 disabled:bg-red_dark h-12 rounded bg-red hover:bg-red_light"
          >
          <p className="self-center p-2 text-2xl font-bold text-default_dark">勝負する</p>
        </button>
        <NpcChoise />
      </div>
      <Result result={result} npcHand={npcHand} />
    </>
  );
};

export default Start;
