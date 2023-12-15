import { Hands } from '@/app/interface/playing/janken/hand';
import Npc from './npc-hand';

const Result = (props: { result: string; npcHand: Hands }) => {
  return (
    <div className="sm:flex justify-center items-center place-self-center text-3xl font-bold text-blue ">
      <p className='flex justify-center '>{props.npcHand != undefined && <Npc hand={props.npcHand} />}</p>
      <p className='flex justify-center sm:w-64 sm:order-first'>{props.result}</p>
      </div>
  );
};

export default Result;
