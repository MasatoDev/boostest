# boostest

## TL;DR

- typescriptの`type`や`interface`, `class`から瞬時にテストデータ作成します。
- `type`や`interface`はテストデータを部分的に上書きできます。
- 作成は`boostest`コマンド入力するだけです。

## 概要


## 使い方

`boostest [file path]`で対象ファイル内に定義された`boostest`を含む関数に対してテストデータを作成します。
作成するテストデータはGenericsで指定された`type`や`interface`,`typeof ClassName`です。


```ts
import { User } from "./class/user"

type Res = {
  statusCode: "200" | "400" | "500",
  body: string
}

interface UserRes {
  name: string;
  age: number;
}

const testData1 = boostestRes<Res>();
const testData2 = boostestUserRes<UserRes>();
const testDataInstance = boostestUserRes<typeof User>(User);

// 値は上書きできます
const testData3 = boostestRes<Res>({statusCode: "500"});
const testData4 = boostestUserRes<UserRes>({name: "Override Name"});
```

`boostestRes`などの関数を定義する必要はありません。`boostest`コマンドで自動生成されます。
Classに関してGenerics部分には`typeof ClassName`とする必要があり、第一引数にClass実体を渡します。
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

```json
// 2つのファイルが対象
"target_pattern": ["src/example.ts", "src/hoge.ts"]

// src内のtsファイルが対象
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


## 補足

現在boostestはベータ版です。
基本的な機能は実装済みですが、`node_modules`のコードや、テストデータ生成時の型種類のカバー率が完璧ではありません。
また、基本的にESMを対応しています。

`node_modules`のコード以外であれば、複雑なexport方法を行ってない限り問題なくご使用いただけると思います。
何か不具合や、ご希望の追加機能があればISSUEをお気軽に作成ください。
