import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from '../layout';
import Page from '../page';
import Loading from '../loading';
import Error from '../error';
import { mockCharactersData } from '@/mock/mock';

let apiFunctions = require('@/api/api');

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
jest.mock('../globals.css', () => {
  return {};
});
jest.mock('@/api/api', () => {
  return {
    getAllStarWarsCharacters: jest.fn(() => mockCharactersData)
  };
});
describe('Check rendering Characters page, Loading and Error Page ', () => {
  it('Check rendering root Page and calling api function', async function () {
    const spy = jest.spyOn(apiFunctions, 'getAllStarWarsCharacters');
    spy.getMockImplementation();
    const jsx = await Page();
    const document = render(jsx);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(document.getByText('Luke Skywalker')).toBeDefined();
  });
  it('Check rendering Loading Page', async function () {
    const document = render(<Loading />);
    expect(document.getByText('Loading...')).toBeDefined();
  });
  it('Check rendering Error Page', async function () {
    const error = {
      name: '404',
      message: 'Something went wrong'
    };
    const document = render(<Error error={error} reset={() => {}} />);

    expect(document.getByText('Something went wrong')).toBeDefined();
  });
});
