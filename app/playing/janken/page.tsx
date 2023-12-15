import Footer from '@/app/ui/common/Footer';
import Navber from '@/app/ui/common/Navber';
import Hand from './player-hand';

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen  bg-default">
      <Navber />
      <Hand />
      <Footer />
    </main>
  );
};

export default Page;
