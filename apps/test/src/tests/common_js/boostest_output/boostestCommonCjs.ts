export function boostestCommonCjs<T>(args?: Partial<T>): T {
	return {
		id: 10,
		name: "test string data",
		...args
	} as T;
}
type main_output_target = { id: number; name: string }; // Extracted from typeAlias

type main = ref_d67371c19035ef2a787384d795513addbd82c1277bfe77e72bd720ffb47abf8a;
type ref_d67371c19035ef2a787384d795513addbd82c1277bfe77e72bd720ffb47abf8a = {
    id: number;
    name: string;
};