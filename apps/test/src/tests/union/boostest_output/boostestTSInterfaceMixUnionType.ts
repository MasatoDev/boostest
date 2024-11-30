export function boostestTSInterfaceMixUnionType<T>(args?: Partial<T>): T {
	return {
		type: true,
		...args
	} as T;
}
type main_output_target = { type: true | 50000 | "A" | 1 | "B" | "C" }; // Extracted from typeAlias

type main = ref_4fafac3e03b00710411d9e18bb6ba8645166db2851bbec8b77f82a73fe75aa1f;
interface ref_4fafac3e03b00710411d9e18bb6ba8645166db2851bbec8b77f82a73fe75aa1f {
    type: 50000 | "A" | 1 | true | ref_588044e4dc1c5099354782e192cc113ce785979cd89ad1c2f900069a9842ce37;
}
type ref_588044e4dc1c5099354782e192cc113ce785979cd89ad1c2f900069a9842ce37 = "A" | "B" | "C";