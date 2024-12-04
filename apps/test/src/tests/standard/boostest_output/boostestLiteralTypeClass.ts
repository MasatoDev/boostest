export function boostestLiteralTypeClass<T>(isArray = false) {
	return new ref_bd53412b19521c486ac1f0009fd9de11def6f9985815cf3799060a1c3b609132("test string data", 10, 9007199254740991n, false, null, undefined, "any", undefined, {}, null, {}, [], {
		name: "test string data",
		ver: 10,
		age: 10
	}, "test string data", "string", 20, 10000000000000n, true, null, {}, [], Symbol(), [
		"test string data",
		10,
		"any",
		{
			name: "test string data",
			ver: 10,
			age: 10
		},
		{
			name: "test string data",
			ver: 10
		},
		"test string data"
	], [
		"test string data",
		10,
		{
			name: "test string data",
			ver: 10,
			age: 10
		},
		{
			name: "test string data",
			ver: 10
		},
		10
	], {
		...{
			name: "test string data",
			ver: 10,
			age: 10
		},
		...{
			name: "test string data",
			ver: 10
		},
		...{
			name: "test string data",
			age: 10
		}
	}, false, "name", "test string data");
}
type main_output_target = ["classReference", ref_bd53412b19521c486ac1f0009fd9de11def6f9985815cf3799060a1c3b609132, [
  string,
  number,
  bigint,
  false | true,
  null,
  undefined,
  any,
  unknown,
  object,
  void,
  {  },
  Array<string>,
  { name: string; ver: number; age: number },
  string | number,
  "string",
  20,
  10000000000000n,
  true,
  null,
  {  },
  { length: 0 },
  symbol,
  { 0: string; 1: number; 2: any; 3: { name: string; ver: number; age: number }; 4: { name: string; ver: number }; 5: string; length: 6 },
  { 0: string; 1: number; 2: { name: string; ver: number; age: number }; 3: { name: string; ver: number }; 4: number; length: 5 },
  { name: string; ver: number; age: number } & { name: string; ver: number } & { name: string; age: number },
  false,
  "name" | "ver" | "age",
  string
]]; // Extracted from typeAlias

type main = ref_bd53412b19521c486ac1f0009fd9de11def6f9985815cf3799060a1c3b609132;
class ref_bd53412b19521c486ac1f0009fd9de11def6f9985815cf3799060a1c3b609132 {
    constructor(public stringLiteral: string, public numberLiteral: number, public bigintLiteral: bigint, public booleanLiteral: boolean, public nullLiteral: null, public undefinedId: undefined, public anyLiteral: any, public unknownLiteral: unknown, public objectLiteral: object, public voidLiteral: void, public functionLiteral: () => void, public arrayLiteral: Array<string>, public referenceLiteral: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa, public unionType: string | number, public tsLiteralString: "string", public tsLiteralNumber: 20, public tsBigInt: 10000000000000n, public tsLiteralBoolean: true, public tsNullLiteral: null, public tsObject: {}, public tsArray: [
    ], public symbolLiteral: symbol, public tsTuple: [
        string,
        number,
        any,
        ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa,
        ref_7ec51250751ce6ad2694d49adfc576e095c555751e1d76e000d5752a28c1810d,
        string
    ], public tsNamedTuple: [
        name: string,
        ver: number,
        ref: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa,
        refInterface: ref_7ec51250751ce6ad2694d49adfc576e095c555751e1d76e000d5752a28c1810d,
        hello: number
    ], public intersectionType: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa & ref_7ec51250751ce6ad2694d49adfc576e095c555751e1d76e000d5752a28c1810d & {
        name: string;
        age: number;
    }, public conditionalType: string extends number ? true : false, public keyof: keyof ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa, public indexAccessor: ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa["name"]) { }
}
type ref_098292025967766030fb75bd87a92107df14a0f7f9367c3088c15de28c69ebaa = {
    name: string;
    ver: number;
    age: number;
};
interface ref_7ec51250751ce6ad2694d49adfc576e095c555751e1d76e000d5752a28c1810d {
    name: string;
    ver: number;
}