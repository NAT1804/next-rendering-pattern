// server side rendered
import { API2 } from "@/config/api";
import Link from "next/link";
import { use } from "react";

// 'force-cache' is default
async function getCharacter() {
  return await (await fetch(API2)).json();
}

export default function Staticprop() {
  const characters = use<any>(getCharacter());

  return (
    <>
      <h2>Static Page</h2>
      {characters?.results.map((e: any) => (
        // <Link
        //   key={e.id}
        //   href={`characters/staticprops/${e.name}`.replace(/\s+/g, "-").toLowerCase()}
        // >
          <h3 key={e.id} style={{ padding: "0.5rem" }}>{e.name}</h3>
        // </Link>
      ))}
    </>
  );
}
