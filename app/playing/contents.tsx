import Image from 'next/image';
import Link from 'next/link';
import { getImageSrc } from '../utils/getImagePath';

const Contents = () => {
  return (
    <div className="sm:flex items-center justify-center px-20">
      <div className="m-5 max-w-sm overflow-hidden rounded border-2 border-red ">
        <Link href="/playing/janken">
        <div className="flex justify-center px-6 pb-2 pt-4">
            <p className="text-3xl font-bold text-blue">じゃんけん</p>
          </div>
          <Image
            className="p-8"
            src={getImageSrc('playing/choju74_0001_0.png')}
            width={200}
            height={200}
            alt="Playing panda"
          />
        </Link>

      </div>

      <div className="m-5 max-w-sm overflow-hidden rounded border-2 border-red ">
       <div className="flex justify-center px-6 pb-2 pt-4">
          <p className="text-3xl font-bold text-blue">じゃんけん</p>
        </div>
        <Image
          className="p-8"
          src={getImageSrc('playing/choju74_0001_0.png')}
          width={200}
          height={200}
          alt="Playing panda"
        />
      </div>

      <div className="m-5 max-w-sm overflow-hidden rounded border-2 border-red ">
         <div className="flex justify-center px-6 pb-2 pt-4">
          <p className="text-3xl font-bold text-blue">じゃんけん</p>
        </div>
        <Image
          className="p-8"
          src={getImageSrc('playing/choju74_0001_0.png')}
          width={200}
          height={200}
          alt="Playing panda"
        />
      </div>
    </div>
  );
};

export default Contents;
