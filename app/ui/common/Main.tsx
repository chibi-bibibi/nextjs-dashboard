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
          <p>じゃんけんアプリに勝敗カウントを追加しました。</p>
        </section>
      </main>
    </>
  );
};

export default Main;
