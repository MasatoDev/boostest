export function boostestLiteralTypeClass<T>(isArray = false) {
	return new ref_2bacd2e9f6e0cfbd088fd5dd2a5217e3e2a4f8bb1dd644ce29145895a2f13477("test string data", 10, 9007199254740991n, false, null, undefined, "any", undefined, {}, null, () => {}, [], {
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
type main_output_target = ["classReference", ref_2bacd2e9f6e0cfbd088fd5dd2a5217e3e2a4f8bb1dd644ce29145895a2f13477, [
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

type main = ref_2bacd2e9f6e0cfbd088fd5dd2a5217e3e2a4f8bb1dd644ce29145895a2f13477;
class ref_2bacd2e9f6e0cfbd088fd5dd2a5217e3e2a4f8bb1dd644ce29145895a2f13477 {
    constructor(public stringLiteral: string, public numberLiteral: number, public bigintLiteral: bigint, public booleanLiteral: boolean, public nullLiteral: null, public undefinedId: undefined, public anyLiteral: any, public unknownLiteral: unknown, public objectLiteral: object, public voidLiteral: void, public functionLiteral: () => void, public arrayLiteral: Array<string>, public referenceLiteral: ref_73ccc34c683e7288a5bbef1eb4e32182d547cdc862f248434f7c4711a8d4cadb, public unionType: string | number, public tsLiteralString: "string", public tsLiteralNumber: 20, public tsBigInt: 10000000000000n, public tsLiteralBoolean: true, public tsNullLiteral: null, public tsObject: {}, public tsArray: [
    ], public symbolLiteral: symbol, public tsTuple: [
        string,
        number,
        any,
        ref_7788667ad6907ef0f3e7032806ce993f7cc51468470e7854079e5979059fef82,
        ref_673a4cb83a673c5c9f09e4924e431eef00c5eb686a8fd5923303311c3f94a236,
        string
    ], public tsNamedTuple: [
        name: string,
        ver: number,
        ref: ref_ab2a108bd233cf2bebefa12112bfe0b1e4dd383ac447dc12524ec0ccd2ea97a4,
        refInterface: ref_8107ad7efe82baabfddbe90048ed74cb97a63d62c6fd00202ce38a72b609cf28,
        hello: number
    ], public intersectionType: ref_27c1d2c487db5b500349512a90386c5fd914c8741be08fc86702c25e115b8d4e & ref_cb293b31a8da303f47ceec79511e8ce59ebe6bec26acd28e36cbf96a0a6de35b & {
        name: string;
        age: number;
    }, public conditionalType: string extends number ? true : false, public keyof: keyof ref_0cd67bb1c4e465b1fde4c8d546d8bb78acfb6724f902ea8f109e0a048e9717b0, public indexAccessor: ref_58c47ba52407166fc9dba7d6b7ce28823c0972aaeb8e564a645363ae50969926["name"]) { }
}
type ref_73ccc34c683e7288a5bbef1eb4e32182d547cdc862f248434f7c4711a8d4cadb = {
    name: string;
    ver: number;
    age: number;
};
type ref_7788667ad6907ef0f3e7032806ce993f7cc51468470e7854079e5979059fef82 = {
    name: string;
    ver: number;
    age: number;
};
interface ref_673a4cb83a673c5c9f09e4924e431eef00c5eb686a8fd5923303311c3f94a236 {
    name: string;
    ver: number;
}
type ref_ab2a108bd233cf2bebefa12112bfe0b1e4dd383ac447dc12524ec0ccd2ea97a4 = {
    name: string;
    ver: number;
    age: number;
};
interface ref_8107ad7efe82baabfddbe90048ed74cb97a63d62c6fd00202ce38a72b609cf28 {
    name: string;
    ver: number;
}
type ref_27c1d2c487db5b500349512a90386c5fd914c8741be08fc86702c25e115b8d4e = {
    name: string;
    ver: number;
    age: number;
};
interface ref_cb293b31a8da303f47ceec79511e8ce59ebe6bec26acd28e36cbf96a0a6de35b {
    name: string;
    ver: number;
}
type ref_0cd67bb1c4e465b1fde4c8d546d8bb78acfb6724f902ea8f109e0a048e9717b0 = {
    name: string;
    ver: number;
    age: number;
};
type ref_58c47ba52407166fc9dba7d6b7ce28823c0972aaeb8e564a645363ae50969926 = {
    name: string;
    ver: number;
    age: number;
};