import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import SocialsBar from "./socials-bar";
import ProfilePic from "./profile-pic";
import Name from "./name";

const name = "Niall Quirke";

export default function Layout({ children, onHomePage }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={name} />
      </Head>
      <header className={styles.header}>
        <ProfilePic onHomePage={onHomePage} />
        <Name onHomePage={onHomePage} name={name} />
        <SocialsBar onHomePage={onHomePage} />
      </header>
      <main>{children}</main>
      {!onHomePage && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
