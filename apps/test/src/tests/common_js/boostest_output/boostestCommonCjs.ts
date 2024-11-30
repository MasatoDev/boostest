export function boostestCommonCjs<T>(args?: Partial<T>): T {
	return {
		id: 10,
		name: "test string data",
		...args
	} as T;
}
type main_output_target = { id: number; name: string }; // Extracted from typeAlias

type main = ref_8cfcf286eb80ee2c78da6fcd240cbe33c8c6e2c07ee08f30093876e7044f03f5;
type ref_8cfcf286eb80ee2c78da6fcd240cbe33c8c6e2c07ee08f30093876e7044f03f5 = {
    id: number;
    name: string;
};