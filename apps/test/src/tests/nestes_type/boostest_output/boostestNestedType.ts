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

type main = ref_f2dbb6526f30bbd50264c30229e75101c7d82a68b97da3bf823cfd9e07c26afc;
type ref_f2dbb6526f30bbd50264c30229e75101c7d82a68b97da3bf823cfd9e07c26afc = {
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
                    nestedRef: ref_9a9f8c1c745a20cd79b9f116b56b6df49016b2ab5438721b1d29be887ec1ab3e;
                };
            };
        };
    };
};
type ref_9a9f8c1c745a20cd79b9f116b56b6df49016b2ab5438721b1d29be887ec1ab3e = {
    name: "NestedRefType";
    deep: ref_e1eb1e2ce068c7ce152d8513f184b4378dd41f6a0ac6cb02db5bee00214b721c;
};
type ref_e1eb1e2ce068c7ce152d8513f184b4378dd41f6a0ac6cb02db5bee00214b721c = {
    name: "deeptype";
};