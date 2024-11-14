/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testEnvironment: "node",
  testRegex: ".*\\.spec.ts$",
  // testRegex: '.*\\main_file_output.spec.ts$',
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.m?[tj]sx?$": ["ts-jest", { useESM: true }],
  },
};
export default config;
