// server side rendered
import supabase from "@/utils/supabase";
import Link from "next/link";
import { use } from "react";
import styles from '../page.module.css'

export const revalidate = 0;

async function getPosts() {
  return await supabase.from("posts").select("id, title");
}

export default function SSR() {
  const {data: posts} = use<any>(getPosts());

  return (
    <>
      <main className={styles.main}>
        {posts.map((e: any) => (
          <Link key={e.id} href={`ssg/${e.id}`} legacyBehavior>
            <a className={styles.card}>
              <h3 style={{ padding: "0.5rem" }}>{e.title}</h3>
            </a>
          </Link>
        ))}
      </main>
    </>
  );
}
