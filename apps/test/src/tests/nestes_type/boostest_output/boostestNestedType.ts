export function boostestNestedType<T>(args?: Partial<T>): T {
	return {
		a: 10,
		b: "test string data",
		c: {
			d: false,
			e: {
				f: 10,
				g: "test string data",
				h: {
					i: 10,
					j: {
						k: false,
						l: []
					}
				}
			},
			m: {
				n: [],
				o: "test string data"
			}
		},
		p: {
			q: { r: 10 },
			s: {
				t: false,
				u: {
					v: 10,
					w: "test string data"
				}
			}
		},
		x: [],
		literalType: "option1",
		mixedType: {
			...{ a: 10 },
			...{ b: "test string data" }
		},
		conditionalType: "active",
		extended: {
			id: 10,
			info: {
				description: "test string data",
				tags: [],
				settings: {
					mode: "auto",
					level: 1,
					extras: {
						feature: false,
						nestedRef: {
							name: "NestedRefType",
							deep: { name: "deeptype" }
						}
					}
				}
			}
		},
		...args
	} as T;
}
type main_output_target = { a: number; b: string; c: { d: false | true; e: { f: number; g: string; h: { i: number; j: { k: false | true; l: Array<string> } } }; m: { n: Array<number>; o: string } }; p: { q: { r: number }; s: { t: false | true; u: { v: number; w: string } } }; x: Array<string | number>; literalType: "option1" | "option2" | "option3"; mixedType: { a: number } & { b: string }; conditionalType: "active" | "inactive" | { status: "pending"; detail: string }; extended: { id: number; info: { description: string; tags: Array<"tag1" | "tag2" | "tag3">; settings: { mode: "auto" | "manual"; level: 1 | 2 | 3; extras: { feature: false | true; nestedRef: { name: "NestedRefType"; deep: { name: "deeptype" } } } } } } }; // Extracted from typeAlias

type main = ref_d4b2cdf1d72e001c06951f6af0809dd9fccec2eff2d1e2c1a3c799e30caa2737;
type ref_d4b2cdf1d72e001c06951f6af0809dd9fccec2eff2d1e2c1a3c799e30caa2737 = {
    a: number;
    b: string;
    c: {
        d: boolean;
        e: {
            f: number;
            g: string;
            h: {
                i: number;
                j: {
                    k: boolean;
                    l: Array<string>;
                };
            };
        };
        m: {
            n: Array<number>;
            o: string;
        };
    };
    p: {
        q: {
            r: number;
        };
        s: {
            t: boolean;
            u: {
                v: number;
                w: string;
            };
        };
    };
    x: Array<(number | string)>;
    literalType: "option1" | "option2" | "option3";
    mixedType: {
        a: number;
    } & {
        b: string;
    };
    conditionalType: "active" | "inactive" | {
        status: "pending";
        detail: string;
    };
    extended: {
        id: number;
        info: {
            description: string;
            tags: Array<("tag1" | "tag2" | "tag3")>;
            settings: {
                mode: "auto" | "manual";
                level: 1 | 2 | 3;
                extras?: {
                    feature: true | false;
                    nestedRef: ref_b8e7dea60d6477beeacd169e29cc4566c1dca797a314860d36a3154d9065d6d2;
                };
            };
        };
    };
};
type ref_b8e7dea60d6477beeacd169e29cc4566c1dca797a314860d36a3154d9065d6d2 = {
    name: "NestedRefType";
    deep: ref_1d7081fcdfe98282a1aeab511f42b40e0f16aa234724d82bdb044d7c675a3bc3;
};
type ref_1d7081fcdfe98282a1aeab511f42b40e0f16aa234724d82bdb044d7c675a3bc3 = {
    name: "deeptype";
};