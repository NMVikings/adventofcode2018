import findFirstFrequencyReachesTwice from "../findFirstFrequencyReachesTwice";

import getTestInput from "../../utils/getTestInput";

const partOneTestsPath = __dirname + "/__fixtures__/Part Two";

const tests = [
  {
    name: "input1",
    fixtureName: `input1.txt`,
    expectedResult: 0
  },
  {
    name: "input2",
    fixtureName: `input2.txt`,
    expectedResult: 10
  },
  {
    name: "input3",
    fixtureName: `input3.txt`,
    expectedResult: 5
  },
  {
    name: "input4",
    fixtureName: `input4.txt`,
    expectedResult: 14
  },
  {
    name: "challenge",
    fixtureName: `challenge.txt`,
    expectedResult: 464
  }
];

tests.forEach(({ name, fixtureName, expectedResult }) => {
  it(name, () => {
    const input = getTestInput(`${partOneTestsPath}/${fixtureName}`);
    expect(findFirstFrequencyReachesTwice(input)).toBe(expectedResult);
  });
});
