import Footer from '@/app/ui/common/Footer';
import Main from '@/app/ui/common/Main';
import Navber from '@/app/ui/common/Navber';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-default">
      <div className="flex items-center justify-center p-6  ">
        <div className="overflow-hidden rounded border-2 border-red">
          <Link href="dashboard/customers">
            <Image
              src="/kaeru.png"
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
    </main>
  );
}
