import { getPathtoFixturePartOne } from "../../utils/getPathToFixture";
import testFunctionOnData from "../../utils/testFunctionOnData";

import checkInventoryIds from "../checkInventoryIds";

describe("test checkInventoryIds", () => {
  const getPathtoFixture = getPathtoFixturePartOne.bind(null, __dirname);

  const tests = [
    {
      expectedResult: 12,
      name: "input1",
      pathToFixture: getPathtoFixture("input1.txt")
    },
    {
      expectedResult: 6888,
      name: "challenge",
      pathToFixture: getPathtoFixture("challenge.txt")
    }
  ];

  testFunctionOnData(tests, checkInventoryIds);
});
