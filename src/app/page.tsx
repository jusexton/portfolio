import styles from "./page.module.css";

import Image from "next/image";
import downloadIcon from "../../public/icons/download.svg";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.gutters}`}>
      <div>
        <h1 className={styles.gradient}>Justin Sexton</h1>
        <h2 className={styles.hero}>Software Engineer</h2>
      </div>
      <p className={styles.p}>
        I write software, change this later. Blah blah. Still need to change
        this later. Just need this longer so that is looks more realistic. Do
        not ask me why I have not grabbed some lorem ipsum by now. I guess I
        just feel like typing.
      </p>
      <a
        href="/documents/resume.pdf"
        download="jusexton-resume.pdf"
        className={styles.button}
      >
        <span>Resume</span>
        <Image
          priority
          className={styles.linkedin}
          src={downloadIcon}
          alt="Connect with me on LinkedIn"
        />
      </a>
    </main>
  );
}
