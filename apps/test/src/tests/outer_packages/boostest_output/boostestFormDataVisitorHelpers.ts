export function boostestFormDataVisitorHelpers<T>(args?: Partial<T>): T {
	return {
		defaultVisitor: {},
		convertValue: (value: any) => {
			return "any";
		},
		isVisitable: (value: any) => {
			return true;
		},
		...args
	} as T;
}
type main_output_target = { defaultVisitor: {  }; convertValue: (value: any) => any; isVisitable: (value: any) => boolean }; // Extracted from typeAlias

type main = ref_36d6b89940033f902950482ec659cacf32c7dfc6e082fe987e3ac9f12875736d;
interface ref_36d6b89940033f902950482ec659cacf32c7dfc6e082fe987e3ac9f12875736d {
    defaultVisitor: ref_b307076b71e8b3b0ffaf7ce9c5e73bcf279a5645bd8c48e56ec8064dd88e6b1f;
    convertValue: (value: any) => any;
    isVisitable: (value: any) => boolean;
}
interface ref_b307076b71e8b3b0ffaf7ce9c5e73bcf279a5645bd8c48e56ec8064dd88e6b1f {
    (this: ref_03cb177c86719d4b97ba617116d8fa2b6451061ee70cd328e74f67492ec60b03, value: any, key: string | number, path: null | Array<string | number>, helpers: ref_da2f6aaf3079ba17b9c5bb3c2029629e5962aedc97f5a7a4742e16d582a7c515): boolean;
}