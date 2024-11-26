/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "node",
  testRegex: ".*\\generics.spec.ts$",
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.m?[tj]sx?$": ["ts-jest", { useESM: true }],
  },
};
export default config;
