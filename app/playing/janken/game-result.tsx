import { Hands } from '@/app/interface/playing/janken/hand';
import Npc from './npc-hand';
import { Dispatch, SetStateAction } from 'react';

const Result = (props: {
  result: string;
  npcHand: Hands;
  resultCount: { win: number; lose: number; even: number };
  setResultCount: Dispatch<
    SetStateAction<{
      win: number;
      lose: number;
      even: number;
    }>
  >;
}) => {
  const resultC = props.resultCount;
  return (
    <div className="items-center justify-center place-self-center text-3xl font-bold text-blue sm:flex ">
      {(props.npcHand != undefined || props.npcHand != null) && (
        <Npc hand={props.npcHand} />
      )}
      <p className="flex justify-center sm:order-first sm:w-64">
        {props.result}
      </p>
      <div className="sm: mx-auto my-5 w-64 text-center text-base">
        <p className="font-bold text-blue">今までの結果</p>
        <p className="font-bold text-blue">勝ち　：{resultC.win}</p>
        <p className="font-bold text-blue">負け　：{resultC.lose}</p>
        <p className="font-bold text-blue">あいこ：{resultC.even}</p>
        <button
          onClick={() => {
            props.setResultCount({ win: 0, lose: 0, even: 0 });
          }}
          className=" sm: mt-3 w-28 rounded bg-red text-base hover:bg-red_light"
        >
          <p className="self-center p-1 font-bold text-default_dark">
            リセット
          </p>
        </button>
      </div>
    </div>
  );
};

export default Result;
