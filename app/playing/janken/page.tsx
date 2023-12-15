import Footer from '@/app/ui/common/Footer';
import Navber from '@/app/ui/common/Navber';
import Hand from './player-hand';

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-default sm:gap-3">
      <Navber />
      <Hand />
      <Footer />
    </main>
  );
};

export default Page;
