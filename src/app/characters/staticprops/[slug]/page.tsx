import { API2 } from "@/config/api";

async function getData() {
  return await (await fetch(`${API2}`)).json();
}

// getStaticPaths in Next13
export async function generateStaticParams() {
  const characters = await getData();

  return characters?.results.map((e: any) => ({
    slug: e?.name.replace(/s+/g, "-").toLowerCase()
  }))
}

export default function StaticPage({ params }: any) {
  return (
    <>
      <h1>The user name is {params.slug}</h1>
    </>
  )
}