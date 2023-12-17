'use client';

import { Hands, hands } from '@/app/interface/playing/janken/hand';
import { useState } from 'react';
import Result from './game-result';

export default function Start(props: { choiseHand: Hands }) {
  const player = props.choiseHand;
  const [npcHand, setNpcHand] = useState(hands[0]);
  const [result, setResult] = useState('なに出そうかな');
  const [flg, setFlg] = useState(false);
  const npc = hands[Math.floor(Math.random() * 3) + 1];
  const [resultCount, setResultCount] = useState({win: 0, lose: 0, even: 0 })

  const PlayerChoise = () => {
    return (
      <p className="my-5 flex justify-center text-2xl font-bold text-blue sm:w-64">
        あなたの選択：{player.text}
      </p>
    );
  };

  const NpcChoise = () => {
    return (
      <p className="my-5 flex justify-center text-2xl font-bold text-blue sm:w-64">
        たぬきの選択：{npcHand.text}
      </p>
    );
  };

  const handleClick = () => {
    if (player.id === npc.id) {
      setResultCount({...resultCount, even: resultCount.even + 1});
      return 'あいこ！';
    } else if (
      (player.id === 1 && npc.id === 2) ||
      (player.id === 2 && npc.id === 3) ||
      (player.id === 3 && npc.id === 1)
    ) {
      setResultCount({...resultCount, win: resultCount.win + 1});
      return 'あなたの勝ち！';
    } else {
      setResultCount({...resultCount, lose: resultCount.lose + 1});
      return 'たぬきの勝ち！';
    }
  };

  return (
    <>
      <div className="items-center justify-center sm:flex ">
        <PlayerChoise />
        <button
          disabled={player.id === 0}
          onClick={() => {
            setResult(handleClick());
            setNpcHand(npc);
          }}
          className="mx-auto flex h-12 justify-center rounded bg-red hover:bg-red_light disabled:bg-red_dark sm:mx-10 sm:w-56"
        >
          <p className="self-center p-2 text-2xl font-bold text-default_dark">
            勝負する
          </p>
        </button>
        <NpcChoise />
      </div>
      <div className="items-center justify-center sm:flex ">
        <Result result={result} npcHand={npcHand} resultCount={resultCount} setResultCount={setResultCount}/>

      </div>
    </>
  );
}
