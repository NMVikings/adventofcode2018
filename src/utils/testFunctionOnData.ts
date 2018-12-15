import getTestInput from "./getTestInput";

interface ITests {
  name: string;
  pathToFixture: string;
  expectedResult: number;
}

const testFunctionOnData = (tests: ITests[], fn: (input: string) => any) => {
  tests.forEach(({ name, pathToFixture, expectedResult }) => {
    it(name, () => {
      const input = getTestInput(pathToFixture);
      expect(fn(input)).toBe(expectedResult);
    });
  });
};

export default testFunctionOnData;
