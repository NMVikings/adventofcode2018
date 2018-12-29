import { getPathtoFixturePartOne } from "../../utils/getPathToFixture";
import testFunctionOnData from "../../utils/testFunctionOnData";

import findNotOverlapedClaim from "../findNotOverlapedClaim";

describe("test findNotOverlapedClaim", () => {
  const getPathtoFixture = getPathtoFixturePartOne.bind(null, __dirname);
  const tests = [
    {
      expectedResult: 3,
      name: "input1",
      pathToFixture: getPathtoFixture("input1.txt")
    },
    {
      expectedResult: 894,
      name: "challenge",
      pathToFixture: getPathtoFixture("challenge.txt")
    }
  ];

  testFunctionOnData(tests, findNotOverlapedClaim);
});
