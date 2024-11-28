export function boostestTSAliasMixUnionObjType<T>(args?: Partial<T>): T {
	return {
		ref_type: true,
		type: true,
		...args
	} as T;
}
type main_output_target = { ref_type: true | 50000 | "A" | 1 | "B" | "C"; type: true | 50000 | "A" | 1 | "B" | "C" }; // Extracted from typeAlias

type main = ref_318e442a7584bf3b9803f280a908fa16ae5ccad046f1c08ba058c896279b684c;
type ref_318e442a7584bf3b9803f280a908fa16ae5ccad046f1c08ba058c896279b684c = {
    ref_type: ref_27f369a4a63ee5bdd497ad0e2b2b2ba2e8975b028962380482cbca0a89a7db22;
    type: 50000 | "A" | 1 | true | ref_5614d8852fbf56220e2ab806be58eab8865ab6f08df0575bb570d4c942ef9195;
};
type ref_27f369a4a63ee5bdd497ad0e2b2b2ba2e8975b028962380482cbca0a89a7db22 = 50000 | "A" | 1 | true | ref_5b32f4694cd1068f470312415ec44789c859cef88c798d6c7775a90e61c49af5;
type ref_5b32f4694cd1068f470312415ec44789c859cef88c798d6c7775a90e61c49af5 = "A" | "B" | "C";
type ref_5614d8852fbf56220e2ab806be58eab8865ab6f08df0575bb570d4c942ef9195 = "A" | "B" | "C";