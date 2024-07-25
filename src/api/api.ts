import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sw-api.starnavi.io/',
  headers: {}
});

export async function getAllStarWarsCharacters() {
  const response = await instance.get('people/');
  return response;
  // const count = response.data.count;
  // const numberOfPagesLeft = Math.ceil(count / 10);
  // const characters = [];
  // for (let i = 1; i <= numberOfPagesLeft; i++) {
  //   const response = await instance.get(`people/?page=${i}`);
  //   characters.push(...response.data.results);
  // }
  // return characters;
}

export async function getCharacterById(id) {
  const response = await instance.get(`people/${id}`);
  return response.data;
}
export async function getAllStarWarsFilmsByCharacter(films) {
  const filmsData = [];
  films.forEach(async (filmId) => {
    const response = await instance.get(`films/${filmId}`);
    filmsData.push(response.data);
  });

  return;
}
