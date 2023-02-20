import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";
import { use } from "react";
import styles from "../../page.module.css";

async function getPosts() {
  return await supabase.from("posts").select("id");
}

async function getPostDetail(id: string) {
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .match({ id })
    .single();
  return post;
}

// getStaticPaths in Next13
export async function generateStaticParams() {
  const { data: posts } = await getPosts();

  return posts!.map(({ id }) => ({
    id,
  }));
}

export default function StaticPage({ params: { id } }: any) {
  const post = use(getPostDetail(id));

  if (!post) {
    notFound()
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <h3># {id}</h3>
          <h1>Title: {post.title}</h1>
          <h2>Content: {post.content}</h2>
        </div>
      </main>
    </>
  );
}
