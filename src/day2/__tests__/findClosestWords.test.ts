import path from "path";

import testFunctionOnData from "../../utils/testFunctionOnData";

import findClosestWords from "../findClosestWords";

describe("test checkInventoryIds", () => {
  const getPathtoFixture = path.resolve.bind(
    null,
    __dirname,
    "__fixtures__",
    "Part Two"
  );

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
