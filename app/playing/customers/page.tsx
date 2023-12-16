import Navber from '@/app/ui/common/Navber';
import { getImageSrc } from '@/app/utils/getImagePath';
import Image from 'next/image';

const dir = String(process.env.BACKEND_URL);
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-default">
      <Navber />
      <div className="flex flex-col items-center justify-center ">
        <div className="m-20 flex flex-col items-center justify-center text-base font-bold text-blue ">
          <p className="text-5xl">工事中</p>
        </div>

        <div className="flex items-center justify-center p-6  ">
          <Image
            src={getImageSrc('choju86_0001_1.png')}
            width={300}
            height={300}
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
