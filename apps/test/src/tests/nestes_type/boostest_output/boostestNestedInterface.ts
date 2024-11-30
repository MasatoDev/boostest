export function boostestNestedInterface<T>(args?: Partial<T>): T {
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

type main = ref_91f6eaf26cd8b9c9e5bc4d9ba105b7791382ce30f27f7949d35888fb1b05be98;
type ref_91f6eaf26cd8b9c9e5bc4d9ba105b7791382ce30f27f7949d35888fb1b05be98 = {
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
                    nestedRef: ref_ba7b36c81899796a97a4a48d0188e3bd0b593c7bfb564c7b3cc136164d35345a;
                };
            };
        };
    };
};
type ref_ba7b36c81899796a97a4a48d0188e3bd0b593c7bfb564c7b3cc136164d35345a = {
    name: "NestedRefType";
    deep: ref_cd2ff64000c69113e2177c1993112ff6512345525bcf302fdb14c9d41ded6d1b;
};
type ref_cd2ff64000c69113e2177c1993112ff6512345525bcf302fdb14c9d41ded6d1b = {
    name: "deeptype";
};