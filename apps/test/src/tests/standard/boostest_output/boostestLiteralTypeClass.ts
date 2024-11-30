export function boostestLiteralTypeClass<T>(isArray = false) {
	return new ref_f1fb5b9c2ae9d97d3942ab20cc48362484628559e92629a0ebade99619501d18("test string data", 10, 9007199254740991n, false, null, undefined, "any", undefined, {}, null, () => {}, [], {
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
type main_output_target = ["classReference", ref_f1fb5b9c2ae9d97d3942ab20cc48362484628559e92629a0ebade99619501d18, [
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
  () => void,
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

type main = ref_f1fb5b9c2ae9d97d3942ab20cc48362484628559e92629a0ebade99619501d18;
class ref_f1fb5b9c2ae9d97d3942ab20cc48362484628559e92629a0ebade99619501d18 {
    constructor(public stringLiteral: string, public numberLiteral: number, public bigintLiteral: bigint, public booleanLiteral: boolean, public nullLiteral: null, public undefinedId: undefined, public anyLiteral: any, public unknownLiteral: unknown, public objectLiteral: object, public voidLiteral: void, public functionLiteral: () => void, public arrayLiteral: Array<string>, public referenceLiteral: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, public unionType: string | number, public tsLiteralString: "string", public tsLiteralNumber: 20, public tsBigInt: 10000000000000n, public tsLiteralBoolean: true, public tsNullLiteral: null, public tsObject: {}, public tsArray: [
    ], public symbolLiteral: symbol, public tsTuple: [
        string,
        number,
        any,
        ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8,
        ref_dbf297ee8019e5f745aefe9bded5aa35f434bc4c272ad8916592c5d691579fc3,
        string
    ], public tsNamedTuple: [
        name: string,
        ver: number,
        ref: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8,
        refInterface: ref_dbf297ee8019e5f745aefe9bded5aa35f434bc4c272ad8916592c5d691579fc3,
        hello: number
    ], public intersectionType: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8 & ref_dbf297ee8019e5f745aefe9bded5aa35f434bc4c272ad8916592c5d691579fc3 & {
        name: string;
        age: number;
    }, public conditionalType: string extends number ? true : false, public keyof: keyof ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8, public indexAccessor: ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8["name"]) { }
}
type ref_3b9c3d089f7db9f57143e53b88cc52ac525a538747ab7942192e5880385639d8 = {
    name: string;
    ver: number;
    age: number;
};
interface ref_dbf297ee8019e5f745aefe9bded5aa35f434bc4c272ad8916592c5d691579fc3 {
    name: string;
    ver: number;
}