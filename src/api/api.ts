import axios from 'axios';
import {
  CharactersDataResponse,
  Character,
  CharacterDataResponse,
  Film
} from '../interfaces/interfaces';
import { BASE_API_URL, NUMBER_CHARACTERS_PER_PAGE } from './const';

export async function getStarWarsCharactersPages() {
  try {
    const response: CharactersDataResponse = await axios.get(
      `${BASE_API_URL}/people/`
    );
    const countCharacters = response.data.count;
    const numberOfPages = Math.ceil(
      countCharacters / NUMBER_CHARACTERS_PER_PAGE
    );

    return numberOfPages;
  } catch (e) {
    console.error('Error retrieving data:', e);
    throw new Error('Request failed');
  }
}
export async function getStarWarsCharactersByPage(page: string) {
  try {
    const response: CharactersDataResponse = await axios.get(
      `${BASE_API_URL}/people/?page=${page}`
    );
    console.log(response, 111);
    return response.data.results;
  } catch (e) {
    console.error('Error retrieving data:', e);
    throw new Error('Request failed');
  }
}
export async function getCharacterById(id: string) {
  try {
    const response: CharacterDataResponse = await axios.get(
      `${BASE_API_URL}people/${id}`
    );

    return response.data;
  } catch (e) {
    console.error('Error retrieving data:', e);
    throw new Error('Request failed');
  }
}
export async function getAllStarWarsFilmsByCharacter(characterId: string) {
  try {
    const response: CharacterDataResponse = await axios.get(
      `${BASE_API_URL}/people/${characterId}`
    );

    const films: Film[] = [];
    for (const url of response.data.films) {
      const response = await axios.get(`${url}`);
      films.push(response.data);
    }
    return films;
  } catch (e) {
    console.error('Error retrieving data:', e);
    throw new Error('Request failed');
  }
}
export async function getAllStarWarsStarShipsByCharacter(characterId: string) {
  try {
    const response: CharacterDataResponse = await axios.get(
      `${BASE_API_URL}/people/${characterId}`
    );
    // Get all star ships data
    const starshipResponse = [];
    if (response.data.starships) {
      for (const url of response.data.starships) {
        const response = await axios.get(`${url}`);
        starshipResponse.push(response.data);
      }
    }

    return starshipResponse;
  } catch (e) {
    console.error('Error retrieving data:', e);
    throw new Error('Request failed');
  }
}
