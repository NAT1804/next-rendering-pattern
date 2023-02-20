import { API, USER_RESOURCE } from "@/config/api";

async function getData() {
  return await (await fetch(`${API}/${USER_RESOURCE}`)).json();
}

// getStaticPaths in Next13
export async function generateStaticParams() {
  const users = await getData();

  return users.map((e: any) => ({
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