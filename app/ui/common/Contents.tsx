import Image from 'next/image';
import Link from 'next/link';

const dir = String(process.env.BACKEND_URL)

const Contents = () => {
  return (
    <div className="flex items-center justify-center p-6  ">
      <div className="overflow-hidden rounded border-2 border-red">
        <Link href="/playing">
          <Image
            src={`${dir}/panda.png`}
            width={200}
            height={200}
            alt="Playing panda"
          />
          <div className="flex justify-center px-6 pb-2 pt-4">
            <p className="text-base font-bold text-blue">遊ぶ</p>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center p-6  ">
        <div className="overflow-hidden rounded border-2 border-red">
          <Link href="/playing/customers">
            <Image
              src={`${dir}/kaeru.png`}
              width={200}
              height={200}
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="flex justify-center px-6 pb-2 pt-4">
              <p className="text-base font-bold text-blue">天気を見る</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contents;
