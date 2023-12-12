import { Hands } from '@/app/interface/playing/janken/hand';
import Npc from './npc-hand';

const Result = (props: { result: string; npcHand: Hands }) => {
  return (
    <div className="flex items-center justify-center p-4 px-8 text-3xl font-bold text-blue ">
      <p className="w-56">{props.result}</p>
      {props.npcHand != undefined && <Npc hand={props.npcHand} />}
    </div>
  );
};

export default Result;
