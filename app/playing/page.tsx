import Footer from '@/app/ui/common/Footer';
import Navber from '@/app/ui/common/Navber';
import Contents from './contents';
import Main from '../ui/common/Main';

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-default">
      <Navber />
      <Main title={'遊ぶ'} />
      <Contents />
      <Footer />
    </main>
  );
};

export default Page;
