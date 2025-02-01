import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/icons/github.svg";
import linkedinIcon from "../../public/icons/linkedin.svg";
import mailIcon from "../../public/icons/mail.svg";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Sexton",
  description: "Personal website of software engineer Justin Sexton.",
  authors: [{ name: "Justin Sexton" }],
  openGraph: {
    title: "Justin Sexton",
    type: "website",
    description: "Personal website of software engineer Justin Sexton.",
    images: "/icons/logo.svg",
    url: "https://justinsexton.dev",
  },
  icons: {
    icon: "icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <nav className={styles.navigation}>
            <Link href={"/"}>Justin Sexton</Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <a
            href="https://github.com/jusexton"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              priority
              className={styles.icon}
              src={githubIcon}
              alt="Checkout my GitHub profile"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jusexton/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              priority
              className={styles.icon}
              src={linkedinIcon}
              alt="Connect with me on LinkedIn"
            />
          </a>

          <a
            href="mailto:justinsexton.dev@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              priority
              className={styles.icon}
              src={mailIcon}
              alt="Email me"
            />
          </a>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
