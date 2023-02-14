// Static site generation
import { API } from "@/config/api";
import { use } from "react";

// getStaticProps in NextJS13
async function getData() {
  return await (await fetch(API)).json();
}

export default function SSG() {
  const users = use<any>(getData());

  return (
    <>
      {users.map((e: any) => (
        <h3 key={e.id}>{e.name}</h3>
      ))}
    </>
  );
}
