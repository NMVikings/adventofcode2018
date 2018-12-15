import fs from "fs";

const getTestInput = (path: string) =>
  fs.readFileSync(path, {
    encoding: "utf8"
  });

export default getTestInput;
