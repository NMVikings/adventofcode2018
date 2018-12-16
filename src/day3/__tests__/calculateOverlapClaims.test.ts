import path from "path";

import testFunctionOnData from "../../utils/testFunctionOnData";

import calculateOverlapClaims from "../calculateOverlapClaims";

describe("test calculateOverlapClaims", () => {
  const getPathtoFixture = path.resolve.bind(
    null,
    __dirname,
    "__fixtures__",
    "Part One"
  );

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
