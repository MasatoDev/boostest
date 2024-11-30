export function boostestTSAliasMixUnionType<T>(isArray = false) {
	return true;
}
type main_output_target = true | 50000 | "A" | 1 | "B" | "C"; // Extracted from typeAlias

type main = ref_675d322f34bde1e92305cbade894603a8f9d94d7418a14e33187c25a984b831a;
type ref_675d322f34bde1e92305cbade894603a8f9d94d7418a14e33187c25a984b831a = 50000 | "A" | 1 | true | ref_588044e4dc1c5099354782e192cc113ce785979cd89ad1c2f900069a9842ce37;
type ref_588044e4dc1c5099354782e192cc113ce785979cd89ad1c2f900069a9842ce37 = "A" | "B" | "C";