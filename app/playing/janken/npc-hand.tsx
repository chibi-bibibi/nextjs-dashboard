import Image from 'next/image';
import { Hands } from '../../interface/playing/janken/hand';

const Npc = (props: { hand: Hands }) => {
  return (
    <div className="flex justify-center p-6 px-8">

      {props.hand.id != 0 && (
        <Image
          src={props.hand.npcImage}
          width={150}
          height={150}
          alt="Playing panda"
        />
      )}
    </div>
  );
};
export default Npc;
