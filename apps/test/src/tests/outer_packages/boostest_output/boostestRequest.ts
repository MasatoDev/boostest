export function boostestRequest<T>(args?: Partial<T>): T {
	return { ...args } as T;
}
type main_output_target = {  }; // Extracted from typeAlias

type main = ref_664dd0ac81849d29651bd7d84ccd119c90d61ad6a64f9f7a00bf9a077e557856;
interface ref_664dd0ac81849d29651bd7d84ccd119c90d61ad6a64f9f7a00bf9a077e557856<P = ref_c8731521a0647f377e3c1ac2aec4e2c9bc652a32d4dc41d8444b7516e13d3f84, ResBody = any, ReqBody = any, ReqQuery = ref_38a2fa01891503448fce0c3434f6e0c466b6193c1aea1c740506fe9ddb1ab6dd, Locals extends ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<string, any> = ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<string, any>> {
}
interface ref_c8731521a0647f377e3c1ac2aec4e2c9bc652a32d4dc41d8444b7516e13d3f84 {
    [key: string]: string;
}
type ref_38a2fa01891503448fce0c3434f6e0c466b6193c1aea1c740506fe9ddb1ab6dd = ref_5c93daf01347e29a627fa5b9141899d2b1ec8f94d5464ca94f674c6e3450d214;
interface ref_5c93daf01347e29a627fa5b9141899d2b1ec8f94d5464ca94f674c6e3450d214 {
    [key: string]: undefined | string | Array<string> | ref_5c93daf01347e29a627fa5b9141899d2b1ec8f94d5464ca94f674c6e3450d214 | Array<ref_5c93daf01347e29a627fa5b9141899d2b1ec8f94d5464ca94f674c6e3450d214>;
}
type ref_8ad3e837da72be35720c18b236d83e0d5b5d5c7473eaa8fbf43b40257c73fe39<K extends keyof any, T> = {
    [P in K]: T;
};