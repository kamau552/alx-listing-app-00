import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="Explore listings with style and speed." />
      </Head>
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Welcome to ALX Listing App</h1>
      </main>
    </>
  );
}
