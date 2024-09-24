import {
  getNumberFromString,
  getStarShipNodes,
  getStarShipEdges
} from '../utils';
import { mockStarShips } from '@/mock/mock';
it('Check getNumberFromString function result', function () {
  const value = getNumberFromString('hello 2024');
  expect(value).toBe('2024');
});
it('Check getStarShipEdges, getStarShipNodes function result', function () {
  const arrEdges = getStarShipEdges(mockStarShips.results);
  const arrNodes = getStarShipNodes(mockStarShips.results);
  expect(arrEdges.length).toBe(1);
  expect(arrEdges[0].source).toBe('provider2-3');
  expect(arrNodes[0].data.label).toBe('Calamari Cruiser');
});
