<img width="1414" alt="スクリーンショット 2024-12-30 14 02 09" src="https://github.com/user-attachments/assets/00b61cc0-a869-413c-8952-590de2a80af6" />



<br />
https://www.npmjs.com/package/@boostest/cli

<br />
<br />

# TL;DR

Japanese(日本語)→[README-ja.md](https://github.com/MasatoDev/boostest/blob/main/README-ja.md)

- TypeScriptの `type`, `interface`, `class`からテストデータを即時に作成！ 📝
- 部分的に作成後のデータを用途に応じて上書きできます 🏗️
- テストデータは実際のコードとしてアウトプットされるためアセットとして利用可能です 💸

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

前もってtsconfig.jsonがあるプロジェクトのルートディレクトリへ移動してください。

```bash
npx boostest init
```

下記のような`boostest.setting.json`が生成されます。

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

`boostest.setting.json`のnameに記載した名前を含む関数を定義してください。未定義のままで構いません。

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

下記のコマンドで未定義だった関数を作成します。

```bash
npx boostest
```

作成された`boostestUser`, `boostestJob`, `boostestTest`をインポートします。

```ts
import { boostestJob } from "../boostest_output/boostestJob";
import { boostestTest } from "../boostest_output/boostestTest";
import { boostestUser } from "../boostest_output/boostestUser";
```

ファイルを実行するとtype通りのテストデータが利用できます。

```ts
console.log("user", user);
// user { name: "init string value", age: 10000 }

console.log("job", job);
// job { name: "init string value" }

console.log("test class prop name", test.name);
// test class prop name init string value
```

## overwrite

値を引数に渡すことで一部上書きすることもできます。

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

globフォーマットで対象となるファイルを指定します。

```json
"target_pattern": ["src/**/*.{ts,tsx}"],
```

内部的に <https://github.com/Gilnaa/globwalk> を利用しています。指定方法の参考にしてみてください。

### name

基本的に`boostest`を含む関数をターゲットにしますが、このワードを`name`で変更できます。

```ts
// boostest[FreeName]<[TypeName or InterfaceName or ClassName]>();
const testData = boostestTest<TypeName>();
```

nameに下記のような指定(`hoge`)をすると、`hoge`を含む関数がターゲットになります。

```ts
// "name": "hoge",
const testData = hogeTest<TypeName>();
```

### output

もし`single`をtrueにすると、一つのディレクトリに出力されます。

```bash
project root
├── boostest_output
│   ├── boostestGeneric.ts
│   ├── boostestGenericsAliasType.ts
│   ├── boostestGenericsInterfaceType.ts
│   └── boostestGenericsTypeClass.ts
```

もし`single`をfalseにすると、各ターゲットファイルの階層に`boostest_output`ディレクトリが作成されます。

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

`tsconfig.json`を特定するために利用します。
`import {hoge} from "@alias/somethis..."`のようなaliasなど独自設定を用いたmodule解決を自動で行えるようになるため、指定することをお勧めします。

### initial_value

自動生成するデータの初期値を一部指定できます。

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
