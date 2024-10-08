import {
  Film,
  If,
  StarShipEdge,
  StarShipNode,
  Starship
} from '@/interfaces/interfaces';

export const getNumberFromString = (string: string) => {
  const strArr = string.match(/\d+/) as RegExpMatchArray;
  return strArr[0];
};

export function getStarShipEdges(starWarsShips: Starship[]): StarShipEdge[] {
  let starShipsEdges: StarShipEdge[] = [];
  starWarsShips.forEach((starShip, key) => {
    const starShipId = getNumberFromString(starShip.url);
    const startShipsFilmsIds = starShip.films.map((url) =>
      getNumberFromString(url)
    );
    startShipsFilmsIds.forEach((filmId) => {
      starShipsEdges.push({
        id: `provider3-${filmId}-${starShipId}`,
        source: `provider2-${filmId}`,
        target: `provider3-${filmId}-${starShipId}`
      });
    });
  });
  return starShipsEdges;
}
export function getStarShipNodes(starWarsShips: Starship[]): StarShipNode[] {
  let starShipsNodes: StarShipNode[] = [];
  starWarsShips.forEach((starShip, key) => {
    const starShipId = getNumberFromString(starShip.url);
    const startShipsFilmsIds = starShip.films.map((url) =>
      getNumberFromString(url)
    );
    startShipsFilmsIds.forEach((filmId) => {
      starShipsNodes.push({
        id: `provider3-${filmId}-${starShipId}`,
        data: {
          label: starShip.name
        },
        position: { x: 170 * key, y: 200 }
      });
    });
  });
  return starShipsNodes;
}
export function getFilmsEdgesOrNodes<isEdgesType extends boolean>(
  starWarsFilms: Film[],
  url: string,
  isEdges: isEdgesType
): If<isEdgesType, StarShipEdge[], StarShipNode[]> {
  let starShipsEdgesOrNodes: StarShipEdge[] & StarShipNode[] = [];
  const characterId = getNumberFromString(url);
  starWarsFilms.forEach((film, key) => {
    const filmId = getNumberFromString(film.url);
    if (isEdges) {
      const filmId = getNumberFromString(film.url);
      starShipsEdgesOrNodes.push({
        id: `provider2-${filmId}`,
        source: `provider-${characterId}`,
        target: `provider2-${filmId}`
      });
    } else {
      starShipsEdgesOrNodes.push({
        id: `provider2-${filmId}`,
        data: { label: `${film.title}` },
        position: { x: key * 150, y: 100 }
      });
    }
  });
  return starShipsEdgesOrNodes;
}
