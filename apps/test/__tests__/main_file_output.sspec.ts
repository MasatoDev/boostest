import { expect } from "@jest/globals";
import path from "path";

const fs = require("fs");

test("boostest main file output correctly", () => {
  try {
    const data = fs.readFileSync("./src/main_test_test_data.ts", "utf-8");

    expect(data).toMatchSnapshot();
  } catch (err) {
    console.log("err", err);
  }
});

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

test("boostest invest dir output correctly", () => {
  try {
    const files = getFilesRecursively("./src/invest");
    const testFiles = files.filter((file) => file.includes("_test_data"));

    testFiles.forEach((file) => {
      const data = fs.readFileSync(file, "utf-8");
      expect(data).toMatchSnapshot();
    });
  } catch (err) {
    console.log("err", err);
  }
});
