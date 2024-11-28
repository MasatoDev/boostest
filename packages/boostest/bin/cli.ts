#!/usr/bin/env node

import {
  OutputCode,
  resolve,
  generatetest as generate,
  TargetType,
} from "../index";
import { inferTsAlias } from "./inferTsAlias";
import { infferTsInterface } from "./inferTSInterface";
import { infferClass } from "./inferClass";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import ts from "typescript";
import path from "path";

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

type Output = Record<string, OutputCode>;

const infferTypes = (result: Output): Output => {
  let codeRecord: Output = {};

  for (const [key, value] of Object.entries(result)) {
    let types;
    types = inferTsAlias(value.code);
    // switch (value.targetType) {
    //   case 0:
    //     types = infferClass(value.code);
    //     break;
    //   case 1:
    //     types = infferTsInterface(value.code);
    //     break;
    //   case 2:
    //     types = infferTsAlias(value.code);
    //     break;
    // }

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
        let result = resolve("", libFilePath);
        if (result) {
          const output = infferTypes(result);
          generate(output);
        }
        return;
      }

      if (!path && tsconfig) {
        console.log(blue + "target is not set." + reset);
        console.log(
          blue + `boostest with boostest.setting.json with ${tsconfig}` + reset,
        );
        let result = resolve("", libFilePath, tsconfig);

        if (result) {
          const output = infferTypes(result);
          generate(output);
        }
        return;
      }

      if (path && !tsconfig) {
        console.log(blue + `target file: ${path}` + reset);
        console.log(blue + "tsconfig is not set." + reset);
        console.log(blue + "boostest with boostest.setting.json" + reset);
        let result = resolve(path, libFilePath);

        if (result) {
          const output = infferTypes(result);
          generate(output);
        }
        return;
      }

      if (path && tsconfig) {
        console.log(blue + `target file: ${path}` + reset);
        console.log(blue + `tsconfig: ${tsconfig}` + reset);
        let result = resolve(path, libFilePath, tsconfig);
        if (result) {
          const output = infferTypes(result);
          generate(output);
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
