// Static site generation
import { API, USER_RESOURCE } from "@/config/api";
import Link from "next/link";
import { use } from "react";
import Image from "next/image";

// getStaticProps in NextJS13
async function getData() {
  return await (await fetch(`${API}/${USER_RESOURCE}`)).json();
}

export default function SSG() {
  const users = use<any>(getData());

  return (
    <>
      {users.map((e: any) => (
        <Link
          key={e.id}
          href={`ssg/${e.name}`.replace(/\s+/g, "-").toLowerCase()}
        >
          <h3 style={{ padding: "0.5rem" }}>{e.name}</h3>
          <Image
            src={e.avatar}
            loading="lazy"
            alt="Avatar"
            width={200}
            height={200}
          />
        </Link>
      ))}
    </>
  );
}
