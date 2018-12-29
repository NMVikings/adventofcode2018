import { getClaimsData, groupPointsByOverlapsing } from "./utils";

const findNotOverlapedClaim = (input: string) => {
  const claimsString = input.split("\n");
  const claimsData = getClaimsData(claimsString);
  const allPoints = claimsData.map(({ points }) => points);
  const { solo } = groupPointsByOverlapsing(allPoints);
  const soloPoints = solo.map(([key]) => key);

  const soloClaim = claimsData.find(claim =>
    claim.points
      .map(point => point.toString())
      .every(point => soloPoints.includes(point))
  );

  if (soloClaim) {
    return soloClaim.id;
  }

  return null;
};

export default findNotOverlapedClaim;
