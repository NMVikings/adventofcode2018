import { getPathtoFixturePartOne } from "../../utils/getPathToFixture";
import testFunctionOnData from "../../utils/testFunctionOnData";

import calculateResultFrequency from "../calculateResultFrequency";

describe("test calculateResultFrequency", () => {
  const getPathtoFixture = getPathtoFixturePartOne.bind(null, __dirname);

  const tests = [
    {
      expectedResult: 3,
      name: "input1",
      pathToFixture: getPathtoFixture("input1.txt")
    },
    {
      expectedResult: 0,
      name: "input2",
      pathToFixture: getPathtoFixture("input2.txt")
    },
    {
      expectedResult: -6,
      name: "input3",
      pathToFixture: getPathtoFixture("input3.txt")
    },
    {
      expectedResult: 529,
      name: "challenge",
      pathToFixture: getPathtoFixture("challenge.txt")
    }
  ];

  testFunctionOnData(tests, calculateResultFrequency);
});
