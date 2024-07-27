import {
  getAllStarWarsCharacters,
  getCharacterById,
  getAllStarWarsStarShipsByCharacter
} from '../api';
import axios from 'axios';
jest.mock('axios', () => {
  return {
    get: () => {
      return {
        data: {
          results: []
        }
      };
    }
  };
});

it('Check  calling axios in a way calling functions', async function () {
  const spy = jest.spyOn(axios, 'get');
  getAllStarWarsCharacters();
  getCharacterById('1');
  getAllStarWarsStarShipsByCharacter('1');
  expect(spy).toHaveBeenCalledTimes(3);
});
