import { getPathtoFixturePartTwo } from "../../utils/getPathToFixture";
import testFunctionOnData from "../../utils/testFunctionOnData";

import findClosestWords from "../findClosestWords";

describe("test findClosestWords", () => {
  const getPathtoFixture = getPathtoFixturePartTwo.bind(null, __dirname);
  const tests = [
    {
      expectedResult: "fgij",
      name: "input1",
      pathToFixture: getPathtoFixture("input1.txt")
    },
    {
      expectedResult: "icxjvbrobtunlelzpdmfkahgs",
      name: "challenge",
      pathToFixture: getPathtoFixture("challenge.txt")
    }
  ];

  testFunctionOnData(tests, findClosestWords);
});
