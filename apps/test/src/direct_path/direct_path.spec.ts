import { expect } from "@jest/globals";
const fs = require("fs");

it("boostest direct path output correctly", () => {
  try {
    const data = fs.readFileSync(
      "./src/direct_path/direct_path_test_data.ts",
      "utf-8",
    );

    expect(data).toMatchSnapshot();
  } catch (err) {
    console.log("err", err);
  }
});
