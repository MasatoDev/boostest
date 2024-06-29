# boostest🚀🚀🚀

typescriptの`type`や`interface`, `class`から瞬時にテストデータ作成するツールです🤖

## TL;DR

- typescriptの`type`や`interface`, `class`から瞬時にテストデータ作成📝
- `type`や`interface`はテストデータを部分的に上書き可能🏗️
- テストデータは実際のコードとして出力されるため、ユーザーのアセットになる💸

<br />

https://github.com/MasatoDev/boostest/assets/46220963/62ce7221-9dfd-4931-bcbe-d540be2db75e

<br />

## インストール⬇️

```bash
# global
npm install -g boostest

# repo
npm install --save-dev boostest
pnpm add -D boostest
yarn add -D boostest
```

<br />

## 基本的な利用方法🚀🚀

####

`type`か`interafce`を利用して下記のような関数を記載

```ts
import {GetUserRes} form "...";

const testData = boostestGetUserRes<GetUserRes>();
```

コマンド実行しテストデータを返す`boostestGetUserRes`を自動生成

```

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


## 詳しい使い方と解説🔧

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


## boostest.setting.json

`boostest.setting.json`を作成すると、複数ファイルをglobで指定するなど便利になります。

```json
{
  "target_pattern": ["src/**/*.ts"],
  "name": "boostest",
  "out_file_name": "test_data",
  "tsconfig": "./tsconfig.json"
}
```


### target_pattern

対象となるファイルをglob形式で指定します。

**2つのファイルが対象**
```json
"target_pattern": ["src/example.ts", "src/hoge.ts"]
```

**src内のtsファイルが対象**
```json
"target_pattern": ["src/**/*.ts"],
```

### name

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

### out_file_name

通常`boostest`コマンドを実行すると、テストデータは新しいファイルに記載され`[対象ファイル名]_boostest.ts`という名前で保存されます。
`out_file_name`を指定すると、`[対象ファイル名]_[out_file_name].ts`のように`boostest`部分を変更できます。

テストファイルは対象ファイルと同じディレクトリにそれぞれ作成されます。

### tsconfig

`tsconfig.json`のパスを指定してください。
`import {hoge} from "@alias/somethis..."`のようなaliasを利用できたり、その他にもモジュール解決の際に役立ちます。

<br />

## 補足⚠️

現在boostestはベータ版です。
基本的な機能は実装済みですが、`node_modules`から提供されるコードはESMやCommonjsなど記法が混在しており完璧にカバーできていません。
boostestは基本的にESMを対応しています。

また、現時点ではテストデータ生成時の型種類のカバー率が完璧ではありません。

`node_modules`のコード以外であれば、複雑なexport方法を行ってない限り問題なくご使用いただけると思います。
何か不具合や、ご希望の追加機能があればISSUEをお気軽に作成ください。
