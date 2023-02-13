// Incremental static generation on demand

import { API } from '@/config/api';

export default function ISROD({ data }: any) {
  return (
    <>
      {data.map((e: any) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the api endpoint e.g. api/revalidate get's pinged.
export async function getStaticProps() {
  const res = await fetch(API);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}
