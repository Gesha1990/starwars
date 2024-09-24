import {
  getStarWarsCharactersPages,
  getStarWarsCharactersByPage
} from '@/api/api';
import Link from 'next/link';
import { PageProps } from '@/interfaces/interfaces';
import { getNumberFromString } from '@/utils/utils';
import { Pagination } from '@/components';

export async function generateStaticParams() {
  const pagesNumber = await getStarWarsCharactersPages();
  const pages = [];
  for (let page = 1; page <= pagesNumber; page++) {
    pages.push({ slug: `${page}` });
  }
  return pages;
}

export default async function Page({ params }: PageProps) {
  const { characters, numberOfPages } = await getStarWarsCharactersByPage(
    params.slug
  );
  let startLiNumber = getNumberFromString(characters[0].url);
  return (
    <div className="min-h-screen">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        <ol
          className="list-decimal list-inside w-fit flex-col p-10 pt-0"
          start={Number(startLiNumber)}
        >
          {characters.map(({ name, url }) => {
            const characterId = getNumberFromString(url);
            return (
              <Link href={`/character/${characterId}`} key={characterId}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ol>
      </div>
      <Pagination numberOfPages={numberOfPages} pageNumber={params.slug} />
    </div>
  );
}
