import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "lollipop-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Things</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button text="test2" />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
