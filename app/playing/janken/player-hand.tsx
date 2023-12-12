'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Hands, hands } from '../../interface/playing/janken/hand';
import { useState } from 'react';
import Start from './game-start';

const Hand = () => {
  const [playerHand, setPlayerHand] = useState(hands[0]);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 px-8 text-base font-bold text-blue ">
        <p className="text-3xl">じゃんけんアプリ</p>
        <p>出す手を選んで「勝負する」を押してね</p>
      </div>

      <div className="flex justify-center p-6 px-8">
        {hands.map((hand) => {
          return (
            hand.id != 0 && (
              <button
                key={hand.id}
                onClick={() => setPlayerHand(hand)}
                className="hover:transition-transform hover:-translate-y-2   mx-10 h-40 max-w-sm overflow-hidden rounded border-2 border-red bg-default_dark"
              >
                <div className="px-6 pb-2 pt-4">
                  <p className="text-3xl font-bold text-blue">{hand.text}</p>
                  <Image
                    src={hand.playerImage}
                    width={100}
                    height={100}
                    alt="Playing panda"
                  />
                </div>
              </button>
            )
          );
        })}
      </div>

      <Start choiseHand={playerHand} />
    </>
  );
};

export default Hand;
