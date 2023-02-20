// incremental static regeneration
import { API, USER_RESOURCE } from "@/config/api";
import Link from "next/link";
import { use } from "react";
import supabase from "@/utils/supabase";

async function getData() {
  const a =  await supabase.from("posts").select("id");
  console.log('a123', a);
  return a;
}

export default function ISROD() {
  const posts = use<any>(getData());

  return (
    <>
      {posts?.data.map((e: any) => (
        <Link
          key={e.id}
          href={`ssg/${e.name}`.replace(/\s+/g, "-").toLowerCase()}
        >
          <h3 style={{ padding: "0.5rem" }}>{e.name}</h3>
        </Link>
      ))}
    </>
  );
}
