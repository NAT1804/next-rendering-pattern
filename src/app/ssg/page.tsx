// Static site generation
import Link from "next/link";
import { use } from "react";
import supabase from "@/utils/supabase";
import styles from '../page.module.css'

// getStaticProps in NextJS13
async function getData() {
  return await supabase.from("posts").select("id, title");
}

export default function SSG() {
  const { data: posts } = use<any>(getData());

  return (
    <>
      <main className={styles.main}>
        {posts.map((e: any) => (
          <Link key={e.id} href={`ssg/${e.id}`} legacyBehavior>
            <a className={styles.card}>
              <h3 className="p-2 text-2xl">{e.title}</h3>
            </a>
          </Link>
        ))}
      </main>
    </>
  );
}
