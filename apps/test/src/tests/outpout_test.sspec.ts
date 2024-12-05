import { describe, expect } from "@jest/globals";
import path from "path";
const fs = require("fs");

function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

describe("boostest all dir output correctly", () => {
  try {
    const files = getFilesRecursively(".");
    const testFiles = files.filter((file) => file.includes("_test_data"));

    testFiles.forEach((file) => {
      const data = fs.readFileSync(file, "utf-8");
      test(`output correctly ${file}`, () => {
        expect(data).toMatchSnapshot();
      });
    });
  } catch (err) {
    console.log("err", err);
  }
});
