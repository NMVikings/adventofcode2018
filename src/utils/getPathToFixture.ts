import path from "path";

const getPathtoFixture = (pathParts: string[]) => path.resolve(...pathParts);

const getPathtoFixturePartOne = (dirPath: string, fixtureName: string) =>
  getPathtoFixture([dirPath, "__fixtures__", "Part One", fixtureName]);

const getPathtoFixturePartTwo = (dirPath: string, fixtureName: string) =>
  getPathtoFixture([dirPath, "__fixtures__", "Part Two", fixtureName]);

export { getPathtoFixturePartOne, getPathtoFixturePartTwo };

export default getPathtoFixture;
