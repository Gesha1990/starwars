import {
  getCharacterById,
  getAllStarWarsFilmsByCharacter,
  getAllStarWarsStarShipsByCharacter
} from '@/api/api';
import { FlowTree } from '@/components';
import { PageProps } from '@/interfaces/interfaces';

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
