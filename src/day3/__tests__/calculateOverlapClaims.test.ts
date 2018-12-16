import { getPathtoFixturePartOne } from "../../utils/getPathToFixture";
import testFunctionOnData from "../../utils/testFunctionOnData";

import calculateOverlapClaims from "../calculateOverlapClaims";

describe("test calculateOverlapClaims", () => {
  const getPathtoFixture = getPathtoFixturePartOne.bind(null, __dirname);
  const tests = [
    {
      expectedResult: 4,
      name: "input1",
      pathToFixture: getPathtoFixture("input1.txt")
    },
    {
      expectedResult: 110195,
      name: "challenge",
      pathToFixture: getPathtoFixture("challenge.txt")
    }
  ];

  testFunctionOnData(tests, calculateOverlapClaims);
});
