export const runtime = "edge";

async function getData() {
  const res = await fetch(
    "https://dev-xxiy8iynl1hazsp.api.raw-labs.com/json-programming-heroes"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const games = (await getData()) as any[];

  return <pre>{JSON.stringify(games || null, null, 4)}</pre>;
}
