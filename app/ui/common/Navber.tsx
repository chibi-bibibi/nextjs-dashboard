import styles from '@/app/ui/home.module.css';
import Link from 'next/link';

const Navber = () => {
  return (
    <nav className={`${styles.nav} flex shrink-0 items-end bg-red`}>
      <ul>
        <Link href="/">
          <p className="text-base font-bold text-default">WebSite</p>
        </Link>
        <Link href="/playing">
          <p className="text-base font-bold text-default">TOP</p>
        </Link>
        <Link href="/playing/customers">
          <p className="text-base font-bold text-default">CONTACT</p>
        </Link>
      </ul>
    </nav>
  );
};

export default Navber;
