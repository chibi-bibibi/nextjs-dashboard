import { getImageSrc } from '@/app/utils/getImagePath';
import Image from 'next/image';
import Link from 'next/link';

const Contents = () => {
  return (    
    <div className="sm:flex items-center justify-center px-20">
      <div className="flex justify-center m-5 rounded border-2 border-red">
        <Link href="/playing">
          <Image
            src={getImageSrc('panda.png')}
            width={200}
            height={200}
            alt="Playing panda"
            className='flex justify-center'
          />
          <div className="flex justify-center px-6 pb-2 pt-4">
            <p className="text-base font-bold text-blue ">遊ぶ</p>
          </div>
        </Link>
      </div>
      <div className="flex justify-center m-5 rounded border-2 border-red">
          <Link href="/playing/customers">
            <Image
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
