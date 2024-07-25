import { getCharacterById, getAllStarWarsFilmsByCharacter } from '@/api/api';
import { FlowTree } from '@/components';

export default async function CharacterPage({ params }) {
  const characterResponse = await getCharacterById(params.id);
  //   const filmsResponse = await getAllStarWarsFilmsByCharacter(
  //     characterResponse.films
  //   );
  console.log(characterResponse, 999999);
  return (
    <div className="min-h-screen">
      <FlowTree character={characterResponse} />
    </div>
  );
}
