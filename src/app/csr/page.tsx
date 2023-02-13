// client side rendered
"use client"
import { API } from "@/config/api";
import { useEffect, useState } from "react";

export default function CRS() {
  const [users, setUsers] = useState<any>([]);

  async function getData() {
    const res = await fetch(API);
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {users.map((e: any) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}
