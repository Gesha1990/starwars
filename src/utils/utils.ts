import {
  If,
  StarShipEdge,
  StarShipNode,
  Starship
} from '@/interfaces/interfaces';
export const getNumberFromString = (string: string) => {
  const strArr = string.match(/\d+/) as RegExpMatchArray;
  return strArr[0];
};

export function getStarShipEdgesOrNodes<isEdgesType extends boolean>(
  starWarsShips: Starship[],
  isEdges: isEdgesType
): If<isEdgesType, StarShipEdge[], StarShipNode[]> {
  let starShipsEdgesOrNodes: StarShipEdge[] & StarShipNode[] = [];
  starWarsShips.forEach((starShip, keyStarShip) => {
    const starShipId = getNumberFromString(starShip.url);
    const filmIds = starShip.films.map((film) => getNumberFromString(film));

    if (isEdges) {
      starShipsEdgesOrNodes.push({
        id: `provider3-${starShipId}`,
        source: `provider2-${starShipId}`,
        target: `provider3-${starShipId}`
      });
    } else {
      starShipsEdgesOrNodes.push({
        id: `provider3-${starShipId}`,
        data: {
          label: starShip.name
        },
        position: { x: 170 * keyStarShip, y: 200 }
      });
    }
  });
  return starShipsEdgesOrNodes;
}
