下記は、型推論のコードです。
この推論のロジックを変更してください。


```typescript

import ts, { Node } from "typescript";
import { removeDuplicateDeclarations } from "./removeDeplicate";

export function inferTsAlias(sourceCode: string) {
  const hoge = removeDuplicateDeclarations(sourceCode);

  console.log(hoge);

  const fileName = "example.ts";

  const sourceFile = ts.createSourceFile(
    fileName,
    hoge,
    ts.ScriptTarget.Latest,
    true,
  );

  const host = ts.createCompilerHost({});
  host.getSourceFile = (fileName) =>
    fileName === "example.ts" ? sourceFile : undefined;
  const program = ts.createProgram(
    [fileName],
    {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.CommonJS,
    },
    host,
  );

  const checker = program.getTypeChecker();

  const boostestTypes: any[] = [];

  function getTypeStructure(type: any): string {
    const isObjectType = (type: any) =>
      (type.flags & ts.TypeFlags.Object) !== 0;

    if (type.isUnion()) {
      return type.types.map((t: any) => getTypeStructure(t)).join(" | ");
    } else if (type.isIntersection()) {
      return type.types.map((t: any) => getTypeStructure(t)).join(" & ");
    } else if (isObjectType(type)) {
      const result = [];
      for (const prop of type.getProperties()) {
        const propType = checker.getTypeOfSymbol(prop);
        const propStructure = getTypeStructure(propType);
        result.push(`${prop.name}: ${propStructure}`);
      }
      return `{ ${result.join("; ")} }`;
    } else {
      return checker.typeToString(type);
    }
  }

  function visit(node: Node) {
    if (
      ts.isTypeAliasDeclaration(node) &&
      node.name.getText().includes("main")
    ) {
      const aliasName = node.name.getText();
      const type = checker.getTypeAtLocation(node);
      const properties = type.getProperties();
      const typeStructure: { [key: string]: string } = {};
      for (const prop of properties) {
        const declaration =
          prop.valueDeclaration || (prop.declarations && prop.declarations[0]);
        if (!declaration) continue;
        const propType = checker.getTypeOfSymbolAtLocation(prop, declaration);
        const propStructure = getTypeStructure(propType);
        if (propStructure) {
          typeStructure[prop.name] = propStructure;
        }
      }
      boostestTypes.push({
        type: "typeAlias",
        name: aliasName,
        structure: `{ ${Object.entries(typeStructure)
          .map(([key, value]) => `${key}: ${value}`)
          .join("; ")} }`,
      });
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  const output = boostestTypes
    .map(
      (t) =>
        `type ${t.name}Structure = ${t.structure}; // Extracted from ${t.type}`,
    )
    .join("\n");

  return output;
}
```


`type main = `で宣言されたtypeの型を推論します。
条件として、推論先のコードで参照元がclassの場合、例えば`GenericsClass`や`typeof GenericsClass`のような参照の場合は
下記のようなロジックへに変更してください。

- Classの場合は第一引数に固定の文字列`classReference`を入れ、第二引数にclassの型を入れ、第三引数にclassのconstructorの引数の型をtype推論完了させ配列で入れる
- typeofの場合は第一引数に固定の文字列`classTypeofReference`を入れ、第二引数にclassの型を入れる


下記のようなイメージです。

```typescript
{

classPara: GenericsClass,
->  classPara: ["classReference", GenericsClass, [ { name: string; innerGeneric: { name: string; ver: number; age: number } , ...  // クラスのconstructorの引数の型をtype推論完了させ配列で入れる ]];

classTypeofPara: typeof GenericsClass,
->  classTypeofPara: ["classTypeofReference", GenericsClass];

}
```


ロジックで処理する対象の例は下記のようなコードです。

```typescript
type main = ref_49b72a5fe7cbe0658aee62bd1aac17b7cb0cdc84dce1b1352024d18b9bd1b12b;
class ref_49b72a5fe7cbe0658aee62bd1aac17b7cb0cdc84dce1b1352024d18b9bd1b12b {
    hoge = "nuga";
    choge = "nuga";
    public bhoge = "nuga";
    constructor(public innserGenericInitializer: ref_898e6258af9be57d5c95a2754e59c17c3f8969d30a048f95f83de46fae22f5ed, public mapperType: ref_08b090159ce8041bd14d1b80b6e0f51063686ab5bb54d53a1c750b4655445f1e, public keyOfMapperType: ref_47d391f8e88854de8fd09a3bd0b9e974bc0efd9f676788cfea5bf84b16a28043, public butterflyWithGenerics: ref_7edef51893ec50876f582b4834c4d1e767ef60ee46544f316194352ecaa622ef<string>, public nonNullable: ref_3519017f26015dca4363179f4a64eb61af3f31e5da42c60c2893b057609ce884<undefined | string | null>, public nestedPartial: {
        childPartial: ref_a8413b2d8581b97adbf3adaa1e7eb6834ed77bc3542d10508c2d6c1576584c0f<ref_6f6e970976f87e695b2316696edab6f9c6e9f19f75856e9aa4fd89f3f920abd2>;
    }, public partial: ref_a9bd52816027af6d57dab4961fad3cffa4d81f270260347ca31801e1a49d2e4a<ref_d2da73960b208f6d852ee394fd295ad1c199ca34f44f0bf681d25cbc2d93f85a>, public required: ref_5ad33e33d01b7e10ddb3c45b174308ad43187f4b0c730f2e88d2524951bf48a8<ref_90563a6f8969cbf6bf32574c58684fe363dd499ca280f2468422da6feca0b0bb>, public readonly: ref_d2c48d0e2aa8e0917ab57e71982f358fc1fdc56ffa1712df1d003e5c2cb8c9dc<ref_e7282ec1a4dc5204553ffe01dfd6c3213e34ef373ad0dee7d633c78b3ba82611>, public extract: ref_2427a887a8d382cbaffe17ccfb5a417fd65fefac66f9db789c13bcd0929e8541<"A" | "B" | "C" | "D" | "E", "D" | "E">, public extractRefUnion: ref_041ff14fc4f79bc23619d2686b788cf1be58b799122411c84d779fb38b36cc17<ref_c76a539e4e1eaa3d3dc3dce3fc0775d263c13c40366cf0792baa1ee3071723f1, "en" | "fr">, public exclude: ref_e9091c74ffacc7529f598d2166b48dfdf6ab11371f42b9dc5eeedcbe77b8cfa3<ref_b33b86dc3db7d21aaa69410b41bfae2474cd80407b9bcc24a20f92823ccfab41, "A">, public onDirectRefUnionType: ref_7b0bab890d1ce5611d6d245ffaed0770e9f95bad06c9c04ba046956232b4f060<"fr">, public array: Array<string>, public pick: ref_8e6398be8277fe564d3eabdb2c943385b28e7521fc1b8ba456d105f24ed1a2f0<ref_1687eb84c7f7bc682eaa9d03a5dca5c4820e27826150baba684aba471996fe1f, "name">, public pickMulti: ref_56603495941491e401607dd67c9f457feeab302e87925697660dbf44b7d2e15e<ref_b31f2c99cba48c76fe949448456b169f959b9fe50d46005bf04da23f65e26818, "ver" | "age">, public omit: ref_faa4d1fc8d1f1e5933d97a498fa4435ea96385618bc286fddccc425db4e6b581<ref_3e4486c27d703af21c7df3bded26e31fcc0a83cb3ccbfc25a038c669feb415f9, "name">) { }
}
type ref_898e6258af9be57d5c95a2754e59c17c3f8969d30a048f95f83de46fae22f5ed = {
    name: string;
    innerGeneric: ref_8bb8ce2655ca30d1faba05d31ecbe78dc40c1d9851997bda47c57d5d7fdcd806<ref_3ac2a1f7e4dc4ed2e2efdcf692002bbe4f102f5a05d07ae66d1841e5c103acf0>;
    innerGenericLiteral: ref_fd6de1baf015d4ee70ee93729d6618a90e01f08d2f808a3a8781bd266d1c9661<"inner generic string">;
};
type ref_3ac2a1f7e4dc4ed2e2efdcf692002bbe4f102f5a05d07ae66d1841e5c103acf0 = {
    name: string;
    ver: number;
    age: number;
};
type ref_8bb8ce2655ca30d1faba05d31ecbe78dc40c1d9851997bda47c57d5d7fdcd806<T> = T;
type ref_fd6de1baf015d4ee70ee93729d6618a90e01f08d2f808a3a8781bd266d1c9661<T> = T;
type ref_08b090159ce8041bd14d1b80b6e0f51063686ab5bb54d53a1c750b4655445f1e = {
    [key in ref_997d67abbd0d5ff04b912041063f3d98e4d1de81b0c7acfe333d10160c17b13b]: string;
};
type ref_997d67abbd0d5ff04b912041063f3d98e4d1de81b0c7acfe333d10160c17b13b = "en" | "fr" | "it" | "es";
type ref_47d391f8e88854de8fd09a3bd0b9e974bc0efd9f676788cfea5bf84b16a28043 = {
    [key in keyof ref_ed5e44722ab7996973de417502086916d4cba290631a16dd88961d51232d024e]: ref_a8fa656470b9901801c00f357471e7cd01fe96be230fc136519fda5cb07d7544[key];
};
type ref_ed5e44722ab7996973de417502086916d4cba290631a16dd88961d51232d024e = {
    name: string;
    ver: number;
    age: number;
};
type ref_a8fa656470b9901801c00f357471e7cd01fe96be230fc136519fda5cb07d7544 = {
    name: string;
    ver: number;
    age: number;
};
type ref_7edef51893ec50876f582b4834c4d1e767ef60ee46544f316194352ecaa622ef<T> = {
    [key in ref_f1b9beb492cb3b16f2e1c7ef8da84077f13b9d5caec004d07d1e426271eeadc1]: T;
};
type ref_f1b9beb492cb3b16f2e1c7ef8da84077f13b9d5caec004d07d1e426271eeadc1 = "en" | "fr" | "it" | "es";
type ref_3519017f26015dca4363179f4a64eb61af3f31e5da42c60c2893b057609ce884<T> = T & {};
type ref_6f6e970976f87e695b2316696edab6f9c6e9f19f75856e9aa4fd89f3f920abd2 = {
    name: string;
    ver: number;
    age: number;
};
type ref_a8413b2d8581b97adbf3adaa1e7eb6834ed77bc3542d10508c2d6c1576584c0f<T> = {
    [P in keyof T]?: T[P];
};
type ref_d2da73960b208f6d852ee394fd295ad1c199ca34f44f0bf681d25cbc2d93f85a = {
    name: string;
    ver: number;
    age: number;
};
type ref_a9bd52816027af6d57dab4961fad3cffa4d81f270260347ca31801e1a49d2e4a<T> = {
    [P in keyof T]?: T[P];
};
type ref_90563a6f8969cbf6bf32574c58684fe363dd499ca280f2468422da6feca0b0bb = {
    name: string;
    ver: number;
    age: number;
};
type ref_5ad33e33d01b7e10ddb3c45b174308ad43187f4b0c730f2e88d2524951bf48a8<T> = {
    [P in keyof T]-?: T[P];
};
type ref_e7282ec1a4dc5204553ffe01dfd6c3213e34ef373ad0dee7d633c78b3ba82611 = {
    name: string;
    ver: number;
    age: number;
};
type ref_d2c48d0e2aa8e0917ab57e71982f358fc1fdc56ffa1712df1d003e5c2cb8c9dc<T> = {
    readonly [P in keyof T]: T[P];
};
type ref_2427a887a8d382cbaffe17ccfb5a417fd65fefac66f9db789c13bcd0929e8541<T, U> = T extends U ? T : never;
type ref_c76a539e4e1eaa3d3dc3dce3fc0775d263c13c40366cf0792baa1ee3071723f1 = "en" | "fr" | "it" | "es";
type ref_041ff14fc4f79bc23619d2686b788cf1be58b799122411c84d779fb38b36cc17<T, U> = T extends U ? T : never;
type ref_b33b86dc3db7d21aaa69410b41bfae2474cd80407b9bcc24a20f92823ccfab41 = "A" | "B" | "C" | "D" | "E";
type ref_e9091c74ffacc7529f598d2166b48dfdf6ab11371f42b9dc5eeedcbe77b8cfa3<T, U> = T extends U ? never : T;
type ref_7b0bab890d1ce5611d6d245ffaed0770e9f95bad06c9c04ba046956232b4f060<T> = T extends ref_f94823a1f5d87b780a5fa6eb23823471e80d662fd6848ccdd098e7406ee54f10 ? T : never;
type ref_f94823a1f5d87b780a5fa6eb23823471e80d662fd6848ccdd098e7406ee54f10 = "en" | "fr" | "it" | "es";
type ref_1687eb84c7f7bc682eaa9d03a5dca5c4820e27826150baba684aba471996fe1f = {
    name: string;
    ver: number;
    age: number;
};
type ref_8e6398be8277fe564d3eabdb2c943385b28e7521fc1b8ba456d105f24ed1a2f0<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_b31f2c99cba48c76fe949448456b169f959b9fe50d46005bf04da23f65e26818 = {
    name: string;
    ver: number;
    age: number;
};
type ref_56603495941491e401607dd67c9f457feeab302e87925697660dbf44b7d2e15e<T, K extends keyof T> = {
    [P in K]: T[P];
};
type ref_3e4486c27d703af21c7df3bded26e31fcc0a83cb3ccbfc25a038c669feb415f9 = {
    name: string;
    ver: number;
    age: number;
};
type ref_faa4d1fc8d1f1e5933d97a498fa4435ea96385618bc286fddccc425db4e6b581<T, K extends keyof any> = ref_167629767c829e3138056074dd6bd9fd145b6c8c9a96973377a1b0610009cb07<T, ref_424ccf6ec743048fcc9de45e2b05806ea007847df799128541015c30e6942111<keyof T, K>>;
type ref_424ccf6ec743048fcc9de45e2b05806ea007847df799128541015c30e6942111<T, U> = T extends U ? never : T;
type ref_167629767c829e3138056074dd6bd9fd145b6c8c9a96973377a1b0610009cb07<T, K extends keyof T> = {
    [P in K]: T[P];
};
```




下記のような結果になる。

type mainStructure = { hoge: string; choge: string; bhoge: string; innserGenericInitializer: { name: string; innerGeneric: { name: string; ver: number; age: number }; innerGenericLiteral: "inner generic string" }; mapperType: { en: string; fr: string; it: string; es: string }; keyOfMapperType: { name: string; ver: number; age: number }; butterflyWithGenerics: { en: string; fr: string; it: string; es: string }; nonNullable: string; nestedPartial: { childPartial: { name: string; ver: number; age: number } }; partial: { name: string; ver: number; age: number }; required: { name: string; ver: number; age: number }; readonly: { name: string; ver: number; age: number }; extract: "D" | "E"; extractRefUnion: "en" | "fr"; exclude: "B" | "C" | "D" | "E"; onDirectRefUnionType: "fr"; array: Array<string>; pick: { name: string }; pickMulti: { ver: number; age: number }; omit: { ver: number; age: number } }; // Extracted from typeAlias


期待値は下記です。修正して

type main = ["classReference", ref_49b72a5fe7cbe0658aee62bd1aac17b7cb0cdc84dce1b1352024d18b9bd1b12b, [
  {
    name: string;
    innerGeneric: {
      name: string;
      ver: number;
      age: number;
    };
    innerGenericLiteral: "inner generic string";
  },
  {
    en: string;
    fr: string;
    it: string;
    es: string;
  },
  {
    name: string;
    ver: number;
    age: number;
  },
  {
    en: string;
    fr: string;
    it: string;
    es: string;
  },
  string,
  {
    childPartial: {
      name?: string;
      ver?: number;
      age?: number;
    };
  },
  {
    name?: string;
    ver?: number;
    age?: number;
  },
  {
    name: string;
    ver: number;
    age: number;
  },
  {
    readonly name: string;
    readonly ver: number;
    readonly age: number;
  },
  "D" | "E",
  "en" | "fr",
  "B" | "C" | "D" | "E",
  "fr",
  Array<string>,
  {
    name: string;
  },
  {
    ver: number;
    age: number;
  },
  {
    ver: number;
    age: number;
  }
]];

