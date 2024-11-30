export function boostestTSAliasMixUnionObjType<T>(args?: Partial<T>): T {
	return {
		ref_type: true,
		type: true,
		...args
	} as T;
}
type main_output_target = { ref_type: true | 50000 | "A" | 1 | "B" | "C"; type: true | 50000 | "A" | 1 | "B" | "C" }; // Extracted from typeAlias

type main = ref_b70f81ba23d4a4525bfccb6620b95c663dc6f07822cbe50156783f820cff0f01;
type ref_b70f81ba23d4a4525bfccb6620b95c663dc6f07822cbe50156783f820cff0f01 = {
    ref_type: ref_675d322f34bde1e92305cbade894603a8f9d94d7418a14e33187c25a984b831a;
    type: 50000 | "A" | 1 | true | ref_588044e4dc1c5099354782e192cc113ce785979cd89ad1c2f900069a9842ce37;
};
type ref_675d322f34bde1e92305cbade894603a8f9d94d7418a14e33187c25a984b831a = 50000 | "A" | 1 | true | ref_588044e4dc1c5099354782e192cc113ce785979cd89ad1c2f900069a9842ce37;
type ref_588044e4dc1c5099354782e192cc113ce785979cd89ad1c2f900069a9842ce37 = "A" | "B" | "C";