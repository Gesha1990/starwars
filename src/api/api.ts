import axios from 'axios';
import {
  FilmsDataResponse,
  CharactersDataResponse,
  Character,
  CharacterDataResponse
} from '../interfaces/interfaces';
import { BASE_API_URL, NUMBER_CHARACTERS_PER_PAGE } from './const';

export async function getAllStarWarsCharacters() {
  try {
    const response: CharactersDataResponse = await axios.get(
      `${BASE_API_URL}/people/`
    );
    const countCharacters = response.data.count;
    const numberOfPagesLeft = Math.ceil(
      countCharacters / NUMBER_CHARACTERS_PER_PAGE
    );
    const characters: Character[] = [];
    // Get all characters
    for (let i = 1; i <= numberOfPagesLeft; i++) {
      const response: CharactersDataResponse = await axios.get(
        `${BASE_API_URL}/people/?page=${i}`
      );
      characters.push(...response.data.results);
    }
    return characters;
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
    const response: FilmsDataResponse = await axios.get(
      `${BASE_API_URL}/films/?name=${characterId}`
    );

    return response.data.results;
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
