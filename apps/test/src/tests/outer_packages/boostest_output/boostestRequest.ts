export function boostestRequest<T>(args?: Partial<T>): T {
	return { ...args } as T;
}
type main_output_target = {  }; // Extracted from typeAlias

type main = ref_e821ded8622dd36e209a8cd49d3e510ae4a812d7637fc53745b1e05c9219dde2;
interface ref_e821ded8622dd36e209a8cd49d3e510ae4a812d7637fc53745b1e05c9219dde2<P = ref_a056623caec632654f72085374b9b8a5b36570f99c0317355fd874eef1beb317, ResBody = any, ReqBody = any, ReqQuery = ref_69a6eed73f7c115b40dcd45dcdbb6939a5e63ac51e76deab439b649233749b64, Locals extends ref_0d4880c87d7e0cb5aa5bb96bf0bffe5e92a93517c3bd8e6509c1086e198135f0<string, any> = ref_0d4880c87d7e0cb5aa5bb96bf0bffe5e92a93517c3bd8e6509c1086e198135f0<string, any>> {
}
interface ref_a056623caec632654f72085374b9b8a5b36570f99c0317355fd874eef1beb317 {
    [key: string]: string;
}
type ref_69a6eed73f7c115b40dcd45dcdbb6939a5e63ac51e76deab439b649233749b64 = ref_78a3baefc91953611f45a23a412a13818cfbb5a9af1c7aacd278891e1a7ee9af;
interface ref_78a3baefc91953611f45a23a412a13818cfbb5a9af1c7aacd278891e1a7ee9af {
    [key: string]: undefined | string | Array<string> | ref_78a3baefc91953611f45a23a412a13818cfbb5a9af1c7aacd278891e1a7ee9af | Array<ref_78a3baefc91953611f45a23a412a13818cfbb5a9af1c7aacd278891e1a7ee9af>;
}
type ref_0d4880c87d7e0cb5aa5bb96bf0bffe5e92a93517c3bd8e6509c1086e198135f0<K extends keyof any, T> = {
    [P in K]: T;
};