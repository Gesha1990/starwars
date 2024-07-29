import {
  getCharacterById,
  getAllStarWarsFilmsByCharacter,
  getAllStarWarsCharacters,
  getAllStarWarsStarShipsByCharacter
} from '@/api/api';
import { Character, CharacterPageProps } from '@/interfaces/interfaces';
import { FlowTree } from '@/components';
import { getNumberFromString } from '@/utils/utils';

export async function generateStaticParams() {
  const characters = await getAllStarWarsCharacters();

  return characters.map((character: Character) => {
    const characterId = getNumberFromString(character.url);
    return { id: `${characterId}` };
  });
}

export default async function Page({ params }: CharacterPageProps) {
  const character = await getCharacterById(params.id);

  const filmsResponse = await getAllStarWarsFilmsByCharacter(params.id);

  const starWarsShipsArr = await getAllStarWarsStarShipsByCharacter(params.id);

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
