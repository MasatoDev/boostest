/*
[TODO]

- [-]astからboostestを含む関数を探し、type, interface, classを取得しtarget_astを作成

- 定義元を入れる場所を作る
- astからtype, interface, classの定義元を探す関数
- astのimport stmtからtarget_astのimportedを追加する関数
- 定義元を見つけたら下記のtarget_astに追加する関数
- 定義元のastからpropertyをチェックし、target_astを更新する関数
- importからsourceを探しresolveし、astを取得する関数
- target_astからASTのないtargetをチェックする関数

[target_ast]
name: "Bus"
local: "Bus"
imported: None
AST: "....."
ref_properties: [
    {
        name: "Hello"
        local: "Hello"

        // 複数importeを跨いで名前変更されている場合はimportedを追加していく。
        // 一番最後のものを利用する
        imported: ["hoge", "huga", "HelloOrigin"]
        AST: "....."
        ref_properties: []
    },
    {
        name: "Member"
        local: "Member"
        imported: None
        AST: "....."
        ref_properties: [
            {
                name: "Character",
                local: "Character",
                imported: None,
                AST: "....."
                ref_properties: []
            }
        ]
    }
]


```
type Character = 'good' | 'bad' | 'neutral';

interface Member {
    name: string;
    age: number;
    charactor: Character;
}

class Hello {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

type Bus = {
    name: string;
    limit: {
        age: number;
        member: number;
    };
    hello: Hello;
    Members: Member[];
};
```


*/

/**
 * [定義元を探す]
 *
 * 1. 定義元を探したい名前を列挙(unresolved names)
 * 2. importを探す
 * 3. importにnamespaceで名前変換されていれば、探す名前はimportedになるため、チェックする
 *   - 構造作る(探す名前、定義されているであろう名前)
 * 4. importのsourceをresolveしast化
 * 5. ast内に定義があるかチェック
 * 6. まだ探せていない定義があれば3に戻りループさせる
 */

/**
 * [定義内容をクリアにする]
 * ！！！！[定義元を探す]中に行う必要あり？？？
 *
 * 定義内容の中(property)にObjectなど存在する場合
 * 1. Object定義がast内に存在するかチェック
 * 2. importからsourceをresolve(namespaceで名前が変わっていることを考慮)
 */

/**
 * [定義元からモック作成]
 *
 * - オブジェクトのモック
 * - インスタンスのモック
 *
 * 定義元から一通り作成する
 * 組み合わせる？
 *
 * TODO: オーバーライドする値を入れ込む
 *
 */
