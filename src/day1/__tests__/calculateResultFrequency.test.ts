import getTestInput from "../../utils/getTestInput";

import calculateResultFrequency from "../calculateResultFrequency";

describe("test calculateResultFrequency", () => {
  const partOneTestsPath = __dirname + "/__fixtures__/Part One";
  const tests = [
    {
      expectedResult: 3,
      fixtureName: `input1.txt`,
      name: "input1"
    },
    {
      expectedResult: 0,
      fixtureName: `input2.txt`,
      name: "input2"
    },
    {
      expectedResult: -6,
      fixtureName: `input3.txt`,
      name: "input3"
    },
    {
      expectedResult: 529,
      fixtureName: `challenge.txt`,
      name: "challenge"
    }
  ];

  tests.forEach(({ name, fixtureName, expectedResult }) => {
    it(name, () => {
      const input = getTestInput(`${partOneTestsPath}/${fixtureName}`);
      expect(calculateResultFrequency(input)).toBe(expectedResult);
    });
  });
});
