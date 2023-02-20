import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import NextLink from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div> */}

      <div className={styles.grid}>
        <NextLink href="/csr" legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              CSR <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Client Side Rendering</p>
          </a>
        </NextLink>
        <NextLink href="/ssr" passHref legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              SSR <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Server Side Rendering</p>
          </a>
        </NextLink>
        <NextLink href="/ssg" passHref legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              SSG <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Static Site Generation</p>
          </a>
        </NextLink>
        <NextLink href="/isr" passHref legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              ISR <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Incremental Static Regeneration</p>
          </a>
        </NextLink>
        <NextLink href="/isr-on-demand" passHref legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              ISROD <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Incremental Static Regeneration On Demand</p>
          </a>
        </NextLink>
      </div>
      <div className={styles.grid}>
        <NextLink href="/characters/client" passHref legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              Client <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Client</p>
          </a>
        </NextLink>
        <NextLink href="/characters/server" passHref legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              Server <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Server</p>
          </a>
        </NextLink>
        <NextLink href="/characters/staticprops" passHref legacyBehavior>
          <a className={styles.card} rel="noopener noreferrer">
            <h2 className={inter.className}>
              Staticprops <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Staticprops</p>
          </a>
        </NextLink>

      </div>
    </main>
  );
}
