import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockCharacter, mockFilms, mockStarShips } from '@/mock/mock';
import Page from '../page';
import axios from 'axios';
let apiFunctions = require('@/api/api');

jest.mock('axios', () => {
  return {
    get: () => {
      return {
        data: mockStarShips.results[0]
      };
    }
  };
});
jest.mock('@/utils/utils', () => {
  return {
    getNumberFromString: () => {
      return {
        data: {
          results: []
        }
      };
    }
  };
});
jest.mock('@/components', () => {
  return {
    FlowTree: () => <div></div>
  };
});
jest.mock('@xyflow/react/dist/style.css', () => {
  return {};
});

describe('Check character page working', () => {
  it('Check character page mounting and axios calling', async function () {
    const spy = jest.spyOn(axios, 'get');
    const jsx = await Page({ params: { id: '2' } });
    const document = render(jsx);
    expect(document.getByText('Star Wars Tree')).toBeDefined();
    expect(spy).toHaveBeenCalledTimes(4);
  });
  it('Check calling all api functions', async function () {
    jest.mock('@/api/api', () => {
      return {
        getCharacterById: jest.fn(() => mockCharacter),
        getAllStarWarsFilmsByCharacter: jest.fn(() => mockFilms),
        getAllStarWarsStarShipsByCharacter: jest.fn(() => mockStarShips)
      };
    });
    const spy = jest.spyOn(apiFunctions, 'getAllStarWarsFilmsByCharacter');
    const spy2 = jest.spyOn(apiFunctions, 'getAllStarWarsStarShipsByCharacter');
    const spy3 = jest.spyOn(apiFunctions, 'getCharacterById');
    await Page({ params: { id: '1' } });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy2).toHaveBeenCalledTimes(1);
    expect(spy3).toHaveBeenCalledTimes(1);
  });
});
