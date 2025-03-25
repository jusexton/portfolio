import styles from "./page.module.css";

import Image from "next/image";
import downloadIcon from "../../public/icons/download.svg";

export default function Home() {
  const yearCount = new Date().getFullYear() - 2010;

  return (
    <main className={`${styles.main} ${styles.gutters}`}>
      <div className={styles.hero}>
        <h1 className={styles.gradient}>Justin Sexton</h1>
        <h2 className={styles.heroText}>Software Engineer</h2>
      </div>
      <p className={styles.p}>
        Hi there! I am a Software Architect at Slalom Build, where I
        channel my passion for technology into creating innovative solutions. I
        love what I do. With extensive experience across the modern web stack, I
        have implemented and architected everything from intuitive front-end
        experiences to robust service infrastructures.
      </p>
      <p className={styles.p}>
        From my first Python project creating command line games {yearCount}{" "}
        years ago, I knew I had found my calling. What began as a fascination
        with programming has evolved into both a fulfilling career and a
        passionate hobby that continues to this day.
      </p>
      <p className={styles.p}>
        Feel free to connect on Github and LinkedIn! Whether you are interested
        in discussing career opportunities, seeking technical advice, or just
        want to collaborate, I am always open to meaningful conversations.
        Don&apos;t hesitate to reach out.
      </p>
      <a
        href="/documents/resume.pdf"
        download="justin-sexton-resume.pdf"
        className={styles.button}
      >
        <span>Resume</span>
        <Image
          priority
          className={styles.linkedin}
          src={downloadIcon}
          alt="Download my resume"
        />
      </a>
    </main>
  );
}
