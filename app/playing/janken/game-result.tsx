import { Hands } from '@/app/interface/playing/janken/hand';
import Npc from './npc-hand';

const Result = (props: { result: string; npcHand: Hands }) => {
  return (
    <div className="items-center justify-center place-self-center text-3xl font-bold text-blue sm:flex ">
      {(props.npcHand != undefined || props.npcHand !=  null) && <Npc hand={props.npcHand} />}
      <p className="flex justify-center sm:order-first sm:w-64">
        {props.result}
      </p>
    </div>
  );
};

export default Result;
