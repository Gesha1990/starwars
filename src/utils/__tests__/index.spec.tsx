import { getNumberFromString, getStarShipEdgesOrNodes } from '../utils';
import { mockStarShips } from '@/mock/mock';
it('Check getNumberFromString function result', function () {
  const value = getNumberFromString('hello 2024');
  expect(value).toBe('2024');
});
it('Check getStarShipEdgesOrNodes function result', function () {
  const arrEdges = getStarShipEdgesOrNodes(mockStarShips.results, true);
  const arrNodes = getStarShipEdgesOrNodes(mockStarShips.results, false);
  expect(arrEdges.length).toBe(1);
  expect(arrEdges[0].source).toBe('provider2-3');
  expect(arrNodes[0].data.label).toBe('Calamari Cruiser');
});
