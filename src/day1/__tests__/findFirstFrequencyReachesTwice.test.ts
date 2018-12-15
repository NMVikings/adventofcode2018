import path from "path";

import testFunctionOnData from "../../utils/testFunctionOnData";

import findFirstFrequencyReachesTwice from "../findFirstFrequencyReachesTwice";

describe("test findFirstFrequencyReachesTwice", () => {
  const getPathtoFixture = path.join.bind(
    null,
    __dirname,
    "/__fixtures__/Part Two"
  );

  const tests = [
    {
      expectedResult: 0,
      name: "input1",
      pathToFixture: getPathtoFixture("input1.txt")
    },
    {
      expectedResult: 10,
      name: "input2",
      pathToFixture: getPathtoFixture("input2.txt")
    },
    {
      expectedResult: 5,
      name: "input3",
      pathToFixture: getPathtoFixture("input3.txt")
    },
    {
      expectedResult: 14,
      name: "input4",
      pathToFixture: getPathtoFixture("input4.txt")
    },
    {
      expectedResult: 464,
      name: "challenge",
      pathToFixture: getPathtoFixture("challenge.txt")
    }
  ];

  testFunctionOnData(tests, findFirstFrequencyReachesTwice);
});
