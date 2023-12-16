import { getImageSrc } from '@/app/utils/getImagePath';
import Image from 'next/image';
import Link from 'next/link';

const Contents = () => {
  return (
    <div className="items-center justify-center px-20 sm:flex">
      <div className="m-5 flex justify-center rounded border-2 border-red">
        <Link href="/playing">
          <Image
            priority={true}
            src={getImageSrc('panda.png')}
            width={200}
            height={200}
            alt="Playing panda"
            className="flex justify-center"
          />
          <div className="flex justify-center px-6 pb-2 pt-4">
            <p className="text-base font-bold text-blue ">遊ぶ</p>
          </div>
        </Link>
      </div>
      <div className="m-5 flex justify-center rounded border-2 border-red">
        <Link href="/playing/customers">
          <Image
            priority={true}
            src={getImageSrc('kaeru.png')}
            width={200}
            height={200}
            alt="Raining frog"
          />
          <div className="flex justify-center px-6 pb-2 pt-4">
            <p className="text-base font-bold text-blue">天気を見る</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contents;
