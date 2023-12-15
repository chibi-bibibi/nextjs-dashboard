import styles from '@/app/ui/home.module.css';
import Link from 'next/link';

const Navber = () => {
  return (
    <nav className={`${styles.nav} flex shrink-0 items-end bg-red sm: min-width:640px;`}>
      <ul>
        <Link href="/">
          <p className="text-base font-bold text-default">TOP</p>
        </Link>
        <Link href="/playing">
          <p className="text-base font-bold text-default">Playing</p>
        </Link>
        <Link href="/playing/customers">
          <p className="text-base font-bold text-default">Weather</p>
        </Link>
      </ul>
    </nav>
  );
};

export default Navber;
