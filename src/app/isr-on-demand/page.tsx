// incremental static regeneration on demand
import Link from "next/link";
import { use } from "react";
import supabase from "@/utils/supabase";
import styles from '../page.module.css'

async function getPosts() {
  return await supabase.from("posts").select("id, title");
}

export default function ISROD() {
  const { data: posts } = use<any>(getPosts());


  if (!posts?.length) {
    return <p>No posts found.</p>;
  }

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
