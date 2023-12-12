import styles from '@/app/ui/home.module.css';

const Main = (props: { title: string }) => {
  return (
    <>
      <header className={styles.main}>
        <h1>{props.title}</h1>
      </header>
      <main>
        <section className={styles.content}>
          <h2>websiteの最新情報</h2>
          <p>最新の情報をご案内します。</p>
        </section>
      </main>
    </>
  );
};

export default Main;
