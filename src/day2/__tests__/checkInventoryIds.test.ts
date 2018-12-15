import path from "path";

import testFunctionOnData from "../../utils/testFunctionOnData";

import checkInventoryIds from "../checkInventoryIds";

describe("test checkInventoryIds", () => {
  const getPathtoFixture = path.resolve.bind(
    null,
    __dirname,
    "__fixtures__",
    "Part One"
  );

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
