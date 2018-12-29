import { countBy, groupBy } from "lodash";

interface IClaimsData {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const cartesianProduct = <T, Y>(a: T[], b: Y[]): Array<[T, Y]> =>
  a
    .map(elA => b.map(elB => [elA, elB]))
    .reduce((acc, p) => [...acc, ...p], []) as Array<[T, Y]>;

const parseClaimString = (str: string): IClaimsData | null => {
  const match = str.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);

  if (!match) {
    return null;
  }

  const [, id, x, y, width, height] = match;

  return {
    height: Number(height),
    id: Number(id),
    width: Number(width),
    x: Number(x),
    y: Number(y)
  };
};

const getClaimsPoints = ({ x, y, width, height }: IClaimsData) => {
  const xCoords = Array.from({ length: width }, (_, i) => i + x);
  const yCoords = Array.from({ length: height }, (_, i) => i + y);

  const allPoints = cartesianProduct(xCoords, yCoords);

  return allPoints;
};

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

const getClaimsData = (claimsString: string[]) =>
  claimsString
    .map(parseClaimString)
    .filter(notEmpty)
    .map(claimData => {
      const points = getClaimsPoints(claimData);

      return {
        ...claimData,
        points
      };
    });

const groupPointsByOverlapsing = <T>(arrays: T[][]) => {
  const stringifiedFlatItems = arrays
    .map(array => array.map(item => item.toString()))
    .reduce((acc, array) => [...acc, ...array], []);

  const countedItems = countBy(stringifiedFlatItems);

  const pointsInfo = groupBy(Object.entries(countedItems), ([, value]) =>
    value > 1 ? "overlaped" : "solo"
  );

  return pointsInfo;
};

export { groupPointsByOverlapsing, getClaimsData };
