import { getNumberFromString } from '../utils';

it('Check getNumberFromString function result', function () {
  const value = getNumberFromString('hello 2024');
  expect(value).toBe('2024');
});
