"use client"
import useSWR from "swr";
import Link from "next/link";

const fetcher = (path: string) =>
  fetch(`https://rickandmortyapi.com/${path}`).then((res) => res.json());


export default function Staticprop() {
  const characters = useSWR('api/character', fetcher);

  return (
    <>
      <h2>Client Page</h2>
      {characters?.data?.results.map((e: any) => (
        <Link
          key={e.id}
          href={`characters/staticprops/${e.name}`.replace(/\s+/g, "-").toLowerCase()}
        >
          <h3 style={{ padding: "0.5rem" }}>{e.name}</h3>
        </Link>
      ))}
    </>
  );
}
