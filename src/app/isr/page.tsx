// server side rendered
import { API, USER_RESOURCE } from "@/config/api";
import Link from "next/link";
import { use } from "react";

async function getData() {
  return await (
    await fetch(`${API}/${USER_RESOURCE}`, { next: { revalidate: 30 } })
  ).json();
}

export default function ISR() {
  const users = use<any>(getData());

  return (
    <>
      {users.map((e: any) => (
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
