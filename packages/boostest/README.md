

<img width="1361" alt="スクリーンショット 2024-07-23 19 22 04" src="https://github.com/user-attachments/assets/87db6ca4-b3a1-4caa-84ed-b9d2e2f2df5b" />

<br />
<br />

# TL;DR
日本語版はこちら→[README-ja.md](https://github.com/MasatoDev/boostest/blob/main/README-ja.md)

- Instantly create test data from TypeScript `type`, `interface`, or `class` 📝
- Partially overwrite test data in `type` or `interface` 🏗️
- Test data is output as actual code, becoming a user asset 💸


#### test.ts
```ts
type User = {
  name: string,
  // ...more complex types
}
interface Job = {
  name: string
  // ...more complex types
}
const user = boostestUser<User>();
const job = boostestJob<Job>();

class Test {
  // complex constructor with types
}
const test = boostestTest<typeof Test>(Test);

```

**With a single command**, you can generate test data for User types, Job instances, and Test classes.

```bash
npx boostest ./test.ts --tsconfig ./tsconfig.json
```


```ts
console.log('user', user);
// user { name: "test string data", ... }

console.log('job', job);
// job { name: "test string data", ... }

console.log('test', test);
// instance of Test { name: "test string data", ... }
```


<br />

# Installation⬇️

```Bash
# global
npm install -g boostest

# repo
npm install --save-dev boostest
pnpm add -D boostest
yarn add -D boostest
```

<br />


# Command 💻


```bash
Ex) boostest ./target_file_path.ts -t ./tsconfig.json

Positionals:
  target_file_path  Specify target file in glob format                  [string]

Options:
  -t, --tsconfig  tsconfig.json path                                    [string]
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
```


<br />

# Basic Usage 🚀🚀

Define a function using `type` or `interface`

```ts
import {GetUserRes} form "...";

const testData = boostestGetUserRes<GetUserRes>();
```

Run the command to auto-generate `boostestGetUserRes` which returns test data


```bash
npx boostest [target_file_path]
```

or

```bash
touch boostest.setting.json
# and add settings to this file.

npx boostest
```

Upon successful command execution, a file containing code like the following will be output in the same directory as the target file.

```ts
export function boostestGetUserRes<T>(args?: Partial<T>): T {
  return ({
    'statusCode':'200',
    'body':'test data string',
    ...args
  } as T);
}
```

The generated test data can be partially overwritten by providing values to the arguments of `boostestGetUserRes`.

```ts
import {GetUserRes} form "...";

const testData = boostestGetUserRes<GetUserRes>({ statusCode: "503" });
```

<br />


# boostest.setting.json

Creating `boostest.setting.json` is convenient for specifying multiple files with glob, etc.

```json
{
  "target_pattern": ["src/**/*.ts"],
  "name": "boostest",
  "out_file_name": "test_data",
  "tsconfig": "./tsconfig.json"
}
```

## target_pattern

Specify the target files in glob format.

Two files are targeted

```json
"target_pattern": ["src/example.ts", "src/hoge.ts"]
```

ts files in src are targeted

```json
"target_pattern": ["src/**/*.ts"],
```

## name

Normally, functions containing `boostest` like the following are targeted, but you can freely change it using name.

```ts
// boostest[FreeName]<[TypeName or InterfaceName]>();
const testData = boostestTestData<TypeName>();
```

If you set name as follows, functions containing `hog`e will be targeted.

```ts
// "name": "hoge",
const testData = hogeTestData<TypeName>();
```

## out_file_name

Normally, when you run the boostest command, the test data is written to a new file and saved with the name `[target file name]_boostest.ts`.
By specifying `out_file_name`, you can change the boostest part to something like `[target file name]_[out_file_name].ts`.

The test files are created in the same directory as the target files respectively.

## tsconfig
Specify the path to `tsconfig.json`.
This is useful for module resolution, such as being able to use aliases like `import {hoge} from "@alias/somethis..."`.

<br />

# Detailed Usage and Explanation 🔧

`boostest [file path]` creates test data for functions containing `boostest` within the target file.
Functions like `boostestHoge`, `boostestTest` are targeted. (The name boostest can be changed in `boostest.setting.json`)

The test data to be created is specified by Generics as `type`, `interface`, or `typeof ClassName`.

```ts
import { User } from './class/user';
import { boostestRes, boostestUserClass, boostestUserRes } from './demo_test_data';

type Res = {
  statusCode: '200' | '400' | '500';
  body: string;
};

interface UserRes {
  name: string;
  age: number;
}

const testData1 = boostestRes<Res>();
const testData2 = boostestUserRes<UserRes>();
const testDataInstance = boostestUserClass<typeof User>(User);


console.log('testData1', testData1);
// testData1 { statusCode: '200', body: 'test data string' }
console.log('testData2', testData2);
// testData2 { name: 'test data string', age: 42 }
console.log('testDataInstance', testDataInstance);
// testDataInstance User { name: 'string_val', age: 42 }
```

<br />

Functions like `boostestRes` are auto-generated by the command, so there is no need to define them beforehand.

For Class, the Generics part needs to be like `typeof ClassName`, and the `Class` entity is passed as the first argument.
The test data is an instance initialized with arbitrary values.

For `type` and `interface`, values can be partially overwritten by passing them as arguments.

※ Single values like `type age = number` are not supported, as creating test data for them is not time-consuming.

<br />

https://github.com/MasatoDev/boostest/assets/46220963/16d43dd8-d194-42e0-9039-5b7f205ba15f

<br />


<br />




# Supports

## Types

| type  | support | example | default result val |
| --- | --- | --- | --- |
| string | ○ | `string` | `"test string data"` |
| number | ○ | `number` | `10` |
| bigint | ○ | `100n` | `9007199254740991` |
| boolean | ○ | `boolean` | `true` |
| undefined | ○ | `undefined` | `undefined` |
| null | ○ | `null` | `null` |
| any | ○ | `any` | `"any"` |
| unknown | ○ | `unknown` | `undefined` |
| never | ○ | `never` | `null` |
| object | ○ | `object` | `{}` |
| void | ○ | `void` | `null` |
| function | ○ | `()=>void` | `()=>{}` |
| array | ○ | `string[]` | `[]` |
| union | ○ | `string \| number` | `"test string data"`  (first val) |
| conditional | ○ | `string extends number ? true : false;` | `true` (true val) |
| symbol | ○ | `symbol` | `Symbol()` |
| tuple type | ○ | `[string, number]` | `["test string data", 10]` |
| named tuple type | ○ | `[name: string, age: number]` | `["test string data", 10]` |
| intersection type | ○ | `Hoge & {age: number}` | `{...hoge(), ...{age: 10}}` |
| reference type | ○ | `{name: [reference type name]}` | `{name: [ReferenceTypeName]}` |
| keyof  | × | `keyof T` | `{}` |
| typeof  | × | `typeof T` | `{}` |
| infer  | × | `infer T` | `{}` |
| mapped type | × | `{[K in keyof T]: T[K]}` | `{}` |
| namespace  | × | `Namespace.Hoge` | `{}` |
| constructor type | × | `abstract new (...args: any) => any` | `{}` |
| index accessor  | × | `Hoge['name']` | `{}` |
| template  | × | ``${string}``  | `{}` |


## Utilities type

| type  | support | example | default result val |
| --- | --- | --- | --- |
| `ThisType<T>`    | × | `ThisType<T>`    | `{}` |
| `Array<T>`       | × | `Array<T>`       | `[]` |
| `Partial<T>`     | × | `Partial<T>`     | `{}` |
| `Required<T>`    | × | `Required<T>`    | `{}` |
| `Readonly<T>`    | × | `Readonly<T>`    | `{}` |
| `Pick<T, K>`      | × | `Pick<T, K>`      | `{}` |
| `Omit<T, K>`      | × | `Omit<T, K>`      | `{}` |
| `Extract<T, U>`   | × | `Extract<T, U>`   | `{}` |
| `Exclude<T, U>`   | × | `Exclude<T, U>`   | `{}` |
| `NonNullable<T>`  | × | `NonNullable<T>`  | `{}` |
| `Parameters<T>`  | × | `Parameters<T>`  | `{}` |
| `ConstructorParameters<T>` | × | `ConstructorParameters<T>` | `{}` |
| `ReturnType<T>`  | × | `ReturnType<T>`  | `{}` |
| `InstanceType<T>` | × | `InstanceType<T>` | `{}` |
| `Promise<T>`     | × | `Promise<T>`     | `{}` |

## Support Targets

### Type Aliases 👌

```ts
type User = {
  name: string,
  age: number
}

type Job = string

const _ = boostestUser<User>();
const _ = boostestJob<Job>();



/** The following function is generated in another file */
export function boostestUser<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		...args
	} as T);
}
export function boostestJob<T>() {
	return 'test string data';
}

```

### Interface 👌

```ts
interface User {
  name: string,
  age: number
}

const result = boostestUser<User>();



/** The following function is generated in another file */
export function boostestUser<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		...args
	} as T);
}

```

### Class (with constructor) 👌

Test data can be created using constructor

```ts
class User {
  name: string;
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const _ = boostestUser<typeof User>(User);



/** The following function is generated in another file */
export function boostestUser<T extends abstract new (...args: any) => any>(User): T {
	return new User('test string data', 10);
}
```

## Import/Export

### ESM

| kind  | support | example |
| --- | --- | --- |
| default import | ○ | `import Hoge from '@/hoge';` |
| import | ○ | `import { Hoge } from '@/hoge';` |
| default export | ○ | `export default Hoge;` |
| named export | ○ | `export type { Hoge as AnotherName }` |
| named default export | ○ | `export type { Hoge as default }` |
| export decl | ○ | `export interface Hoge {  name: string; }` |
| default export decl | ○ | `export default interface Hoge {  name: string; }` |
| export with import | ○ | `export type { Hoge } from './index';` |
| named export with import | ○ | `export type { Hoge as AnotherName } from './index';` |

### CommonJS

| kind  | support | example |
| --- | --- | --- |
| export assignment | × | `export = Hoge;` |
| require | × | `const hoge = require('./hoge.js');` |


### Namespace 🙅‍♂️

**not supported**

```ts
declare namespace h {
  interface Hoge {name: string}
}

export = h;
```

```ts
import type { Hoge } from 'file';

let _ = boostestHoge<Hoge>();

/** Function is not generated */
```



