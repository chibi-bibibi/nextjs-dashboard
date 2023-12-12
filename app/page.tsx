import Navber from './ui/common/Navber';
import Main from './ui/common/Main';
import Footer from './ui/common/Footer';
import Contents from './ui/common/Contents';

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-default">
      <Navber />
      <Main title="TOPページ" />
      <Contents />
      <Footer />
    </main>
  );
};

export default Page;
