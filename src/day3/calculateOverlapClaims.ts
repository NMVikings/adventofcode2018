// import { flattenDepth, intersectionWith } from "lodash";

interface IClaimsData {
  id: string;
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
    id,
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

const findIntersection = <T>(arrays: T[][]) => {
  const union = new Set();
  const intersection = new Set();

  for (const array of arrays) {
    for (const item of array) {
      const stringifiedItem = item.toString();

      if (!union.has(stringifiedItem)) {
        union.add(stringifiedItem);
        continue;
      }

      if (!intersection.has(stringifiedItem)) {
        intersection.add(stringifiedItem);
      }
    }
  }
  return Array.from(intersection);
};

const calculateOverlapClaims = (input: string) => {
  const claimsString = input.split("\n");
  const claimsData = claimsString.map(parseClaimString) as IClaimsData[];

  const allPoints = claimsData.map(getClaimsPoints);

  const intersectionPoints = findIntersection(allPoints);

  return intersectionPoints.length;
};

export default calculateOverlapClaims;
