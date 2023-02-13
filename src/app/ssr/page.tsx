// server side rendered

import { API } from "@/config/api";

export default function SSR({ data }: any) {
  return (
    <>
      {data.map((e: any) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(API);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
