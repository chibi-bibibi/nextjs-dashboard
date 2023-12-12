import Image from 'next/image';
import Link from 'next/link';

const dir = String(process.env.BACKEND_URL)

const Contents = () => {
  return (
    <div className="flex items-center justify-center p-6 px-8">
      <div className="mx-4 max-w-sm overflow-hidden rounded border-2 border-red ">
        <Link href="/playing/janken">
          <div className="flex justify-center px-6 pb-2 pt-4">
            <p className="text-3xl font-bold text-blue">じゃんけん</p>
          </div>
          <Image
            className="p-8"
            src={'/../../public/playing/choju74_0001_0.png'}
            width={200}
            height={200}
            alt="Playing panda"
          />
        </Link>
      </div>

      <div className="mx-4 max-w-sm overflow-hidden rounded border-2 border-red ">
        <div className="flex justify-center px-6 pb-2 pt-4">
          <p className="text-3xl font-bold text-blue">じゃんけん</p>
        </div>
        <Image
          className="p-8"
          src={`../../../../public/playing/choju74_0001_0.png`}
          width={200}
          height={200}
          alt="Playing panda"
        />
      </div>

      <div className="mx-4 max-w-sm overflow-hidden rounded border-2 border-red ">
        <div className="flex justify-center px-6 pb-2 pt-4">
          <p className="text-3xl font-bold text-blue">じゃんけん</p>
        </div>
        <Image
          className="p-8"
          src={`../../../../public/playing/choju74_0001_0.png`}
          width={200}
          height={200}
          alt="Playing panda"
        />
      </div>
    </div>
  );
};

export default Contents;
