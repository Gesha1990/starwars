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
      filmIds.forEach((filmId) => {
        starShipsEdgesOrNodes.push({
          id: `provider3-${filmId}-${starShipId}`,
          source: `provider2-${filmId}`,
          target: `provider3-${filmId}-${starShipId}`
        });
      });
    } else {
      filmIds.forEach((filmId) => {
        starShipsEdgesOrNodes.push({
          id: `provider3-${filmId}-${starShipId}`,
          data: {
            label: starShip.name
          },
          position: { x: 170 * keyStarShip, y: 200 }
        });
      });
      // deleted all duplicates
      starShipsEdgesOrNodes = [
        ...(new Map(
          starShipsEdgesOrNodes.map((item: StarShipNode) => [
            item.data.label,
            item
          ])
        ).values() as any)
      ];
    }
  });
  return starShipsEdgesOrNodes;
}
