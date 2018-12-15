import getTestInput from "../../utils/getTestInput";

import findFirstFrequencyReachesTwice from "../findFirstFrequencyReachesTwice";

describe("test findFirstFrequencyReachesTwice", () => {
  const partTwoTestsPath = __dirname + "/__fixtures__/Part Two";
  const tests = [
    {
      expectedResult: 0,
      fixtureName: `input1.txt`,
      name: "input1"
    },
    {
      expectedResult: 10,
      fixtureName: `input2.txt`,
      name: "input2"
    },
    {
      expectedResult: 5,
      fixtureName: `input3.txt`,
      name: "input3"
    },
    {
      expectedResult: 14,
      fixtureName: `input4.txt`,
      name: "input4"
    },
    {
      expectedResult: 464,
      fixtureName: `challenge.txt`,
      name: "challenge"
    }
  ];

  tests.forEach(({ name, fixtureName, expectedResult }) => {
    it(name, () => {
      const input = getTestInput(`${partTwoTestsPath}/${fixtureName}`);
      expect(findFirstFrequencyReachesTwice(input)).toBe(expectedResult);
    });
  });
});
