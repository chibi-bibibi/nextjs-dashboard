'use client';

import Image from 'next/image';
import { hands } from '../../interface/playing/janken/hand';
import { useState } from 'react';
import Start from './game-start';

const Hand = () => {
  const [playerHand, setPlayerHand] = useState(hands[0]);

  const pre = () => {
    hands.map((hand) => {
      return (
        <Image key={hand.id} src={hand.playerImage} alt={'プリロードする'} />
      );
    });
  };

  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center text-base font-bold text-blue ">
        <p className="text-3xl">じゃんけんアプリ</p>
        <p>出す手を選んで「勝負する」を押してね</p>
      </div>

      <div className="flex justify-center p-6 px-8">
        {hands.map((hand) => {
          {
            if (hand.playerImage == null) {
              return <>Loading</>;
            } else {
              const src = hand.playerImage
              return (
                hand.id != 0 && (
                  <button
                    key={hand.id}
                    onClick={() => setPlayerHand(hand)}
                    className="m-2 h-40 overflow-hidden rounded border-2 border-red  bg-default_dark hover:-translate-y-2 sm:mx-10 sm:max-w-sm sm:hover:transition-transform"
                  >
                    <div className="pb-2 pt-4 sm:px-6">
                      <p className="text-3xl font-bold text-blue">
                        {hand.text}
                      </p>
                      <Image
                        priority={true}
                        src={src}
                        width={100}
                        height={100}
                        alt={hand.text}
                      />
                    </div>
                  </button>
                )
              );
            }
          }
        })}
      </div>
      <Start choiseHand={playerHand} />
    </>
  );
};

export default Hand;
