import {
  getCharacterById,
  getAllStarWarsFilmsByCharacter,
  getAllStarWarsStarShipsByCharacter
} from '@/api/api';
import { Character, PageProps } from '@/interfaces/interfaces';
import { FlowTree } from '@/components';
import { getNumberFromString } from '@/utils/utils';

export async function generateStaticParams() {
  const characters = await getAllStarWarsCharacters();

  return characters.map((character: Character) => {
    const characterId = getNumberFromString(character.url);
    return { id: `${characterId}` };
  });
}

export default async function Page({ params }: PageProps) {
  const character = await getCharacterById(params.slug);

  const filmsResponse = await getAllStarWarsFilmsByCharacter(params.slug);

  const starWarsShipsArr = await getAllStarWarsStarShipsByCharacter(
    params.slug
  );

  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <h1>Star Wars Tree</h1>
      </div>
      <FlowTree
        character={character}
        films={filmsResponse}
        starWarsShips={starWarsShipsArr}
      />
    </div>
  );
}
