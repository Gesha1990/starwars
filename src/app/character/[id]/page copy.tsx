import Link from 'next/link';
import { getAllStarWarsCharacters } from '@/api/api';
import { getNumberFromString } from '@/utils/utils';

export const metadata = {
  title: 'Star Wars Characters',
  description: 'In this list you can find all Star Wars characters'
};

export default async function Page() {
  const characters = await getAllStarWarsCharacters();
  return (
    <main className="min-h-screen">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        <ul className="list-decimal list-inside w-fit flex-col p-10 pt-0">
          {characters.map(({ name, url }) => {
            const characterId = getNumberFromString(url);

            return (
              <Link href={`/character/${characterId}`} key={characterId}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
