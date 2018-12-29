import {
  getClaimsData,
  groupPointsByOverlapsing
} from "./utils";

const calculateOverlapClaims = (input: string) => {
  const claimsString = input.split("\n");
  const claimsData = getClaimsData(claimsString);
  const allPoints = claimsData.map(({ points }) => points);
  const { overlaped } = groupPointsByOverlapsing(allPoints);

  return overlaped.length;
};

export default calculateOverlapClaims;
