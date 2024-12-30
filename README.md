<img width="400" alt="スクリーンショット 2024-07-23 19 22 04" src="https://github.com/user-attachments/assets/235342dc-fb7e-4b51-8ec7-5a3a21585ec7" />
<br />
https://www.npmjs.com/package/@boostest/cli

<br />
<br />

# TL;DR

Japanese(日本語)→[README-ja.md](https://github.com/MasatoDev/boostest/blob/main/README-ja.md)

- Instantly create test data from TypeScript `type`, `interface`, or `class` 📝
- Partially overwrite test data in `type` or `interface` 🏗️
- Test data is output as actual code, becoming a user asset 💸

## Installation

```Bash
# global
npm install -g @boostest/cli

# repo
npm install --save-dev @boostest/cli
pnpm add -D @boostest/cli
yarn add -D @boostest/cli
```

## Init

Go to the root directory of the project where tsconfig.json and other files are located.

```bash
npx boostest init
```

The following file `boostest.setting.json` will be created

```json
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
```

## Add BoostestFuntion

Define a function that includes the contents described in name in boostest.setting.json as shown below, and specify the Type, etc. in Generic. You can leave the function undefined.

```ts
type User = {
  name: string;
  age: number;
  // ...more complex types
};
interface Job {
  name: string
  // ...more complex types
}
class Test {
  constructor(public name: string) {
  }
}

const user = boostestUser<User>(); // Cannot find name 'boostestUser'
const job = boostestJob<Job>(); // Cannot find name 'boostestJob'.
const test = boostestTest<Test>(); // Cannot find name 'boostestTest'.
```

## Generate

The following commands will automatically generate functions that were undefined.

```bash
npx boostest
```

Import `boostestUser`, `boostestJob` and `boostestTest` from the automatically generated directories.

```ts
import { boostestJob } from "../boostest_output/boostestJob";
import { boostestTest } from "../boostest_output/boostestTest";
import { boostestUser } from "../boostest_output/boostestUser";
```

When the file is executed, the contents of type are available as values.

```ts
console.log("user", user);
// user { name: "init string value", age: 10000 }

console.log("job", job);
// job { name: "init string value" }

console.log("test class prop name", test.name);
// test class prop name init string value
```

## overwrite

```ts
type User = {
  name: string;
  age: number;
  // ...more complex types
};
const user = boostestUser<User>({ age: 30 }); // overwrites the default value age

console.log("user", user);
// user { name: "init string value", age: 30 }

```

<br />

# Introduction 🚀

## boostest.setting.json

### target_pattern

Specify the target files in glob format.

```json
"target_pattern": ["src/**/*.{ts,tsx}"],
```

Internally <https://github.com/Gilnaa/globwalk> is used.

### name

Normally, functions containing `boostest` like the following are targeted, but you can freely change it using name.

```ts
// boostest[FreeName]<[TypeName or InterfaceName or ClassName]>();
const testData = boostestTest<TypeName>();
```

If you set name as follows, functions containing `hoge` will be targeted.

```ts
// "name": "hoge",
const testData = hogeTest<TypeName>();
```

### output

If `single` is set to `true`, the test data will be output to a single file.

```bash
project root
├── boostest_output
│   ├── boostestGeneric.ts
│   ├── boostestGenericsAliasType.ts
│   ├── boostestGenericsInterfaceType.ts
│   └── boostestGenericsTypeClass.ts
```

If `single` is set to `false`, the test data will be output to a separate file.

```Bash
something
├── dir1
│   ├── boostest_output
│   │   ├── boostestFile1.ts
│   │   └── boostestFile1-2.ts
│   └── targetFile1.ts
├── dir2
│   ├── boostest_output
│   │   └── boostestFile2.ts
│   └── targetFile2.ts
├── dir3
│   ├── boostest_output
│   │   └── boostestFile3.ts
│   └── targetFile3.ts
```

### tsconfig

Specify the path to `tsconfig.json`.
This is useful for module resolution, such as being able to use aliases like `import {hoge} from "@alias/somethis..."`.

### initial_value

You can set the initial value for each type.

```json
"initial_value": {
  "string": "init string value",
  "number": 10000,
  "bigint": "556455199254740991n",
  "any": "any value"
}
```

```ts
string -> "init string value"
number -> 10000
bigint -> 556455199254740991n
any -> "any value"
```

# Supports

## Types

| type              | support | example                                 | default result val               |
| ----------------- | ------- | --------------------------------------- | -------------------------------- |
| string            | ○       | `string`                                | `"test string data"`             |
| number            | ○       | `number`                                | `10`                             |
| bigint            | ○       | `100n`                                  | `9007199254740991`               |
| boolean           | ○       | `boolean`                               | `true`                           |
| undefined         | ○       | `undefined`                             | `undefined`                      |
| null              | ○       | `null`                                  | `null`                           |
| any               | ○       | `any`                                   | `"any"`                          |
| unknown           | ○       | `unknown`                               | `undefined`                      |
| never             | ○       | `never`                                 | `null`                           |
| object            | ○       | `object`                                | `{}`                             |
| void              | ○       | `void`                                  | `null`                           |
| function          | ○       | `()=>void`                              | `()=>{}`                         |
| array             | ○       | `string[]`                              | `[]`                             |
| union             | ○       | `string \| number`                      | `"test string data"`             |
| conditional       | ○       | `string extends number ? true : false;` | `false` (Condition Result)       |
| symbol            | ○       | `symbol`                                | `Symbol()`                       |
| tuple type        | ○       | `[string, number]`                      | `["test string data", 10]`       |
| named tuple type  | ○       | `[name: string, age: number]`           | `["test string data", 10]`       |
| intersection type | ○       | `{name: string} & {age: number}`        | `{ name: "init string value", age: 10000 }`      |
| keyof             | ○       | `keyof { name: string }`                | `name`                           |
| typeof            | ○       | `typeof Hoge // const Hoge = { name: "hoge" };` | `user { name: "init string value" }` |
| infer             | ○       |  -                                      | -                                |
| mapped type       | ○       |  -                                      | -                                |
| namespace         | ○       |  -                                      | -                                |
| constructor type  | ○       |  -                                      | -                                |
| index accessor    | ○       |  -                                      | -                                |
| template          | ○       |  -                                      | -                                |


## Utilities type

| type                       | support |
| -------------------------- | ------- |
| `ThisType<T>`              | ○       |
| `Array<T>`                 | ○       |
| `Partial<T>`               | ○       |
| `Required<T>`              | ○       |
| `Readonly<T>`              | ○       |
| `Pick<T, K>`               | ○       |
| `Omit<T, K>`               | ○       |
| `Extract<T, U>`            | ○       |
| `Exclude<T, U>`            | ○       |
| `NonNullable<T>`           | ○       |
| `Parameters<T>`            | ○       |
| `ConstructorParameters<T>` | ○       |
| `ReturnType<T>`            | ○       |
| `InstanceType<T>`          | ○       |
| `Promise<T>`               | ○       |


## Import/Export

### ESM

| kind                     | support | example                                               |
| ------------------------ | ------- | ----------------------------------------------------- |
| default import           | ○       | `import Hoge from '@/hoge';`                          |
| import                   | ○       | `import { Hoge } from '@/hoge';`                      |
| default export           | ○       | `export default Hoge;`                                |
| named export             | ○       | `export type { Hoge as AnotherName }`                 |
| named default export     | ○       | `export type { Hoge as default }`                     |
| export decl              | ○       | `export interface Hoge {  name: string; }`            |
| default export decl      | ○       | `export default interface Hoge {  name: string; }`    |
| export with import       | ○       | `export type { Hoge } from './index';`                |
| named export with import | ○       | `export type { Hoge as AnotherName } from './index';` |

### CommonJS

| kind              | support | example                              |
| ----------------- | ------- | ------------------------------------ |
| export assignment | ○       | `export = Hoge;`                     |
| require           | ×       | `const hoge = require('./hoge.js');` |

## declaration

### namespace

Not supported in some cases
