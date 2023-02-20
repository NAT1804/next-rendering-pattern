// client side rendered
"use client";
import { API, USER_RESOURCE } from "@/config/api";
import Link from "next/link";
import useSWR from "swr";
import { Suspense } from "react";

const fetcher = (path: string) =>
  fetch(`${API}/${path}`).then((res) => res.json());

export default function CSR() {
  const users = useSWR(USER_RESOURCE, fetcher);

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        {users?.data?.map((e: any) => (
          <Link
            key={e.id}
            href={`ssg/${e.name}`.replace(/\s+/g, "-").toLowerCase()}
          >
            <h3 style={{ padding: "0.5rem" }}>{e.name}</h3>
          </Link>
        ))}
      </Suspense>
    </>
  );
}
