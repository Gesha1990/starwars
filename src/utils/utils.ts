import { StarShipEdge, StarShipNode, Starship } from '@/interfaces/interfaces';
export const getNumberFromString = (string: string) => {
  const strArr = string.match(/\d+/) as RegExpMatchArray;
  return strArr[0];
};

export const getStarShipEdges = (starWarsShips: Starship[]) => {
  const starShipsEdges: StarShipEdge[] = [];
  starWarsShips.forEach((starShip, keyStarShip) => {
    starShip.films.forEach((filmUrl, key) => {
      // Skip  iteration next after one
      if (key < 1) {
        const starShipId = getNumberFromString(starShip.url);
        const filmId = getNumberFromString(filmUrl);
        starShipsEdges.push({
          id: `provider3-${starShipId}-${filmId}`,
          source: `provider2-${filmId}`,
          target: `provider3-${starShipId}-${filmId}`
        });
      }
      return;
    });
  });
  return starShipsEdges;
};
export const getStarShipNodes = (starWarsShips: Starship[]) => {
  const starShipNodes: StarShipNode[] = [];
  starWarsShips.forEach((starShip, keyStarShip) => {
    starShip.films.forEach((filmUrl, key) => {
      // Skip  iteration next after one
      if (key < 1) {
        const starShipId = getNumberFromString(starShip.url);
        const filmId = getNumberFromString(filmUrl);

        starShipNodes.push({
          id: `provider3-${starShipId}-${filmId}`,
          data: {
            label: starShip.name
          },
          position: { x: 170 * keyStarShip, y: 200 }
        });
      }
      return;
    });
  });
  return starShipNodes;
};
