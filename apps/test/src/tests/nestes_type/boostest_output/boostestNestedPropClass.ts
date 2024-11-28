export function boostestNestedPropClass<T>(isArray = false) {
	return new ref_bcc04e19e55c6423027f440d1ba8cc7eb412798604228b44b31ec84c62e98331({
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
						nestedRef: { name: "NestedRefType" }
					}
				}
			}
		}
	});
}
type main_output_target = ["classReference", ref_bcc04e19e55c6423027f440d1ba8cc7eb412798604228b44b31ec84c62e98331, [
  { a: number; b: string; c: { d: false | true; e: { f: number; g: string; h: { i: number; j: { k: false | true; l: Array<string> } } }; m: { n: Array<number>; o: string } }; p: { q: { r: number }; s: { t: false | true; u: { v: number; w: string } } }; x: Array<string | number>; literalType: "option1" | "option2" | "option3"; mixedType: { a: number } & { b: string }; conditionalType: "active" | "inactive" | { status: "pending"; detail: string }; extended: { id: number; info: { description: string; tags: Array<"tag1" | "tag2" | "tag3">; settings: { mode: "auto" | "manual"; level: 1 | 2 | 3; extras: { feature: false | true; nestedRef: { name: "NestedRefType" } } } } } }
]]; // Extracted from typeAlias

type main = ref_bcc04e19e55c6423027f440d1ba8cc7eb412798604228b44b31ec84c62e98331;
class ref_bcc04e19e55c6423027f440d1ba8cc7eb412798604228b44b31ec84c62e98331 {
    a: number;
    b: string;
    k: boolean;
    constructor(huga: {
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
                        nestedRef: ref_f49328cea5d9ce449611e2acb05b6acbe5e2db9139a45f3f78bd120af3496ca4;
                    };
                };
            };
        };
    }) {
        this.a = huga.a;
        this.b = huga.b;
        this.k = huga.c.e.h.j.k;
    }
}
type ref_f49328cea5d9ce449611e2acb05b6acbe5e2db9139a45f3f78bd120af3496ca4 = {
    name: "NestedRefType";
};