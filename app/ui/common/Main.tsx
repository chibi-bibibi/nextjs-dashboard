'use client';

import styles from '@/app/ui/home.module.css';
import { useEffect } from 'react';

const Main = (props: { title: string }) => {
  useEffect(() => {}, [props.title]);

  return (
    <>
      <header className={styles.main}>
        <h1>{props.title}</h1>
      </header>
      <main>
        {props.title === 'TOPページ' ? (
          <section className={styles.content}>
            <h2>更新情報</h2>
            <p>天気予報アプリを実装しました。</p>
          </section>
        ) : (
          <section className={styles.content}>
            <h2></h2>
            <p>何をするか選んでね</p>
          </section>
        )}
      </main>
    </>
  );
};

export default Main;
