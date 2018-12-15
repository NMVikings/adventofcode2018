import calculateResultFrequency from "../calculateResultFrequency";
import getTestInput from "../../utils/getTestInput";

const partOneTestsPath = __dirname + "/__fixtures__/Part One";

const tests = [
  {
    name: "input1",
    fixtureName: `input1.txt`,
    expectedResult: 3
  },
  {
    name: "input2",
    fixtureName: `input2.txt`,
    expectedResult: 0
  },
  {
    name: "input3",
    fixtureName: `input3.txt`,
    expectedResult: -6
  },
  {
    name: "challenge",
    fixtureName: `challenge.txt`,
    expectedResult: 529
  }
];

tests.forEach(({ name, fixtureName, expectedResult }) => {
  it(name, () => {
    const input = getTestInput(`${partOneTestsPath}/${fixtureName}`);
    expect(calculateResultFrequency(input)).toBe(expectedResult);
  });
});
