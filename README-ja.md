
<img width="1361" alt="スクリーンショット 2024-07-23 19 22 04" src="https://github.com/user-attachments/assets/87db6ca4-b3a1-4caa-84ed-b9d2e2f2df5b" />

<br />
<br />


# TL;DR

- typescriptの`type`や`interface`, `class`から瞬時にテストデータ作成📝
- `type`や`interface`はテストデータを部分的に上書き可能🏗️
- テストデータは実際のコードとして出力されるため、ユーザーのアセットになる💸


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

コマンド１つで、type, interface, classからテストデータが作成できます。

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

# インストール⬇️

```bash
# global
npm install -g boostest

# repo
npm install --save-dev boostest
pnpm add -D boostest
yarn add -D boostest
```


<br />


# コマンド 💻


```bash
Ex) boostest ./target_file_path.ts -t ./tsconfig.json

Positionals:
  target_file_path  glob形式で対象ファイルを指定                           [string]

Options:
  -t, --tsconfig  tsconfig.json path                                    [string]
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
```


<br />

# 基本的な利用方法🚀🚀

`type`か`interafce`を利用して下記のような関数を記載

```ts
import {GetUserRes} form "...";

const testData = boostestGetUserRes<GetUserRes>();
```

コマンド実行しテストデータを返す`boostestGetUserRes`を自動生成


```bash
npx boostest [target_file_path]
```

*or*


```bash

touch boostest.setting.json
# and add settings to this file.

npx boostest
```

コマンドが成功すれば下記のようなコードを含むファイルが対象ファイルと同じ階層に出力されます。

```ts
export function boostestGetUserRes<T>(args?: Partial<T>): T {
	return ({
		'statusCode':'200',
		'body':'test data string',
		...args
	} as T);
}
```

作成されたテストデータは`boostestGetUserRes`の引数に値を入れることで部分的に上書きできます。

```ts
import {GetUserRes} form "...";

const testData = boostestGetUserRes<GetUserRes>({ statusCode: "503" });
```

<br />


# boostest.setting.json

`boostest.setting.json`を作成すると、複数ファイルをglobで指定するなど便利になります。

```json
{
  "target_pattern": ["src/**/*.ts"],
  "name": "boostest",
  "out_file_name": "test_data",
  "tsconfig": "./tsconfig.json"
}
```


## target_pattern

対象となるファイルをglob形式で指定します。

**2つのファイルが対象**
```json
"target_pattern": ["src/example.ts", "src/hoge.ts"]
```

**src内のtsファイルが対象**
```json
"target_pattern": ["src/**/*.ts"],
```

## name

通常、下記のように`boostest`を含む関数が対象ですが、`name`を利用すると自由に変更できます。

```ts
// boostest[FreeName]<[TypeName or InterfaceName]>();
const testData = boostestTestData<TypeName>();
```

下記のように`name`を設定すると、`hoge`を含む関数が対象となります。

```ts
// "name": "hoge",
const testData = hogeTestData<TypeName>();
```

## out_file_name

通常`boostest`コマンドを実行すると、テストデータは新しいファイルに記載され`[対象ファイル名]_boostest.ts`という名前で保存されます。
`out_file_name`を指定すると、`[対象ファイル名]_[out_file_name].ts`のように`boostest`部分を変更できます。

テストファイルは対象ファイルと同じディレクトリにそれぞれ作成されます。

## tsconfig

`tsconfig.json`のパスを指定してください。
`import {hoge} from "@alias/somethis..."`のようなaliasを利用できたり、その他にもモジュール解決の際に役立ちます。

<br />


# 詳しい使い方と解説🔧

`boostest [file path]`で対象ファイル内に定義された`boostest`を含む関数に対してテストデータを作成します。
`boostestHoge`, `boostestTest`などが対象となります。(`boostest`という名前は`boostest.setting.json`で変更可能)

作成するテストデータはGenericsで指定された`type`や`interface`,`typeof ClassName`です。


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

`boostestRes`などの関数はコマンドで自動生成されるため、あらかじめ定義する必要はありません。

Classに関してGenerics部分には`typeof ClassName`のようにする必要があり、第一引数にClass実体を渡します。
テストデータは任意な値で初期化されたインスタンスです。

`type`, `interface`に関しては、引数へ渡すことで部分的に値を上書きできます。

※ `type age = number`のような単独の値には対応していません。テストデータを作る手間がかからないためです。




<br />

https://github.com/MasatoDev/boostest/assets/46220963/16d43dd8-d194-42e0-9039-5b7f205ba15f

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



