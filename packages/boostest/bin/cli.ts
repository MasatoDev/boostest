#!/usr/bin/env node

import {
  OutputCode,
  resolve,
  generatetest as generate,
  TargetType,
} from "../index";
import { inferTsAlias } from "./inferTsAlias";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import ts from "typescript";
import path from "path";
import fs from "fs";

const newFileName = "lib.es5.d.ts";
let defaultLibFilePath = ts.getDefaultLibFilePath({} as ts.CompilerOptions);
// WARN: Maybe es5 or higher is needed.
const libFilePath = path.join(path.dirname(defaultLibFilePath), newFileName);

// const path = process.argv[2]; // 0: node, 1: スクリプト名, 2: 引数
// if (path) {
//   boostest(path);
// } else {
//   boostest('');
// }

const initialSettingFile = `
{
  "target_pattern": ["src/**/*.ts"],
  "name": "boostest",
  "tsconfig": "./tsconfig.json",
  "output": {
    "single": true
  },
  "initial_value": {
    "string": "init string value",
    "number": 10000,
    "bigint": "556455199254740991n",
    "any": "any value"
  }
}
`;

type Output = Record<string, OutputCode>;

const infferTypes = (result: Output): Output => {
  let codeRecord: Output = {};

  for (const [key, value] of Object.entries(result)) {
    let types;
    types = inferTsAlias(value.code);

    if (types) {
      codeRecord[key] = {
        code: types,
        path: value.path,
        targetType: value.targetType,
      };
    }
  }

  return codeRecord;
};

yargs(hideBin(process.argv))
  .scriptName("")
  .usage("ex) boostest ./target_file_path.ts -t ./tsconfig.json")
  .option("tsconfig", {
    alias: "t",
    type: "string",
    description: "tsconfig.json path",
  })
  .command(
    "init",
    "Create boostest.setting.json",
    () => {},
    (argv) => {
      // boostest initコマンド時にboostest.setting.jsonを生成
      const fileName = "boostest.setting.json";

      if (!fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, initialSettingFile);

        console.log(`Created ${fileName} with`);
      } else {
        console.log(`${fileName} already exists. Skipping creation.`);
      }
    },
  )
  .command(
    "* [target_file_path]",
    "",
    (yargs) => {
      return yargs.positional("target_file_path", {
        describe: "Path to the target files",
        type: "string",
        demandOption: false,
      });
    },
    (argv) => {
      var black = "\u001b[30m";
      var red = "\u001b[31m";
      var green = "\u001b[32m";
      var yellow = "\u001b[33m";
      var blue = "\u001b[34m";
      var magenta = "\u001b[35m";
      var cyan = "\u001b[36m";
      var white = "\u001b[37m";

      var reset = "\u001b[0m";

      const path = argv.target_file_path;
      const tsconfig = argv.tsconfig;

      if (!path && !tsconfig) {
        console.log(blue + "arguments are not set." + reset);
        console.log(blue + "boostest with boostest.setting.json" + reset);
        let { outputCode, outputOption } = resolve("", libFilePath);
        if (outputCode) {
          const output = infferTypes(outputCode);
          generate(output, outputOption);
        }
        return;
      }

      if (!path && tsconfig) {
        console.log(blue + "target is not set." + reset);
        console.log(
          blue + `boostest with boostest.setting.json with ${tsconfig}` + reset,
        );
        let { outputCode, outputOption } = resolve("", libFilePath, tsconfig);

        if (outputCode) {
          const output = infferTypes(outputCode);
          generate(output, outputOption);
        }
        return;
      }

      if (path && !tsconfig) {
        console.log(blue + `target file: ${path}` + reset);
        console.log(blue + "tsconfig is not set." + reset);
        console.log(blue + "boostest with boostest.setting.json" + reset);
        let { outputCode, outputOption } = resolve(path, libFilePath);

        if (outputCode) {
          const output = infferTypes(outputCode);
          generate(output, outputOption);
        }
        return;
      }

      if (path && tsconfig) {
        console.log(blue + `target file: ${path}` + reset);
        console.log(blue + `tsconfig: ${tsconfig}` + reset);
        let { outputCode, outputOption } = resolve(path, libFilePath, tsconfig);
        if (outputCode) {
          const output = infferTypes(outputCode);
          generate(output, outputOption);
        }

        return;
      }

      console.error(
        red +
          "Invalid arguments. Please check the usage with `--help`." +
          reset,
      );
    },
  )
  .help("help")
  .parse();
