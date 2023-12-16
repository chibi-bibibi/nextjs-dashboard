import Footer from '@/app/ui/common/Footer';
import Navber from '@/app/ui/common/Navber';
import Content from './content';

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-default">
      <Navber />
      <Content />
      <Footer />
    </main>
  );
};

export default Page;
