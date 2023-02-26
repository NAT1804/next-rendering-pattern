// client side rendered
"use client";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import styles from "../page.module.css";
import Loading from "./loading";

export default function CSR() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data: posts } = await supabase.from("posts").select("id, title");
      setPosts(posts);
    };
    getPosts();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          {posts.map((e: any) => (
            <Link key={e.id} href={`ssg/${e.id}`} legacyBehavior>
              <a className={styles.card}>
                <h3 style={{ padding: "0.5rem" }}>{e.title}</h3>
              </a>
            </Link>
          ))}
        </Suspense>
      </main>
    </>
  );
}
