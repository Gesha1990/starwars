export const metadata = {
  title: 'Star Wars main page',
  description: 'In this list you can find all Star Wars characters'
};

export default async function Page() {
  return (
    <main className="min-h-screen">
      <h1 className="flex justify-center">Star wars main page</h1>
      <p className="max-w-90 mt-5 mx-auto text-center">
        In this app you can find all star wars characters, in which episodes
        they appear and what starship they fly on.
      </p>
    </main>
  );
}
