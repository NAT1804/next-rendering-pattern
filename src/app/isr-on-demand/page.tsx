// server side rendered
import { API } from "@/config/api";
import { use } from "react";

async function getData() {
  return await (await fetch(API, { cache: "no-store" })).json();
}

export default function SSR() {

  const users = use<any>(getData());

  return (
    <>
      {users.map((e: any) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

