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
  const starShipsEdgesOrNodes: StarShipEdge[] & StarShipNode[] = [];
  starWarsShips.forEach((starShip, keyStarShip) => {
    const starShipId = getNumberFromString(starShip.url);
    const filmId = getNumberFromString('filmUrl/1');
    if (isEdges) {
      starShipsEdgesOrNodes.push({
        id: `provider3-${starShipId}-${filmId}`,
        source: `provider2-${filmId}`,
        target: `provider3-${starShipId}-${filmId}`
      });
    } else {
      starShipsEdgesOrNodes.push({
        id: `provider3-${starShipId}-${filmId}`,
        data: {
          label: starShip.name
        },
        position: { x: 170 * keyStarShip, y: 200 }
      });
    }
  });
  return starShipsEdgesOrNodes;
}
