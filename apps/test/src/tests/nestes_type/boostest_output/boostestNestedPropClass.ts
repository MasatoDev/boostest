export function boostestNestedPropClass<T>(isArray = false) {
	return new ref_de6b4531102aa7d7c65bf50fa9f5bf29ba06528367e701c23bf665e5dff6af25({
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
type main_output_target = ["classReference", ref_de6b4531102aa7d7c65bf50fa9f5bf29ba06528367e701c23bf665e5dff6af25, [
  { a: number; b: string; c: { d: false | true; e: { f: number; g: string; h: { i: number; j: { k: false | true; l: Array<string> } } }; m: { n: Array<number>; o: string } }; p: { q: { r: number }; s: { t: false | true; u: { v: number; w: string } } }; x: Array<string | number>; literalType: "option1" | "option2" | "option3"; mixedType: { a: number } & { b: string }; conditionalType: "active" | "inactive" | { status: "pending"; detail: string }; extended: { id: number; info: { description: string; tags: Array<"tag1" | "tag2" | "tag3">; settings: { mode: "auto" | "manual"; level: 1 | 2 | 3; extras: { feature: false | true; nestedRef: { name: "NestedRefType" } } } } } }
]]; // Extracted from typeAlias

type main = ref_de6b4531102aa7d7c65bf50fa9f5bf29ba06528367e701c23bf665e5dff6af25;
class ref_de6b4531102aa7d7c65bf50fa9f5bf29ba06528367e701c23bf665e5dff6af25 {
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
                        nestedRef: ref_6f2b3c7d08dd7c00df857b60b4d683f05362237b31b51cd9491c860d8af15ec5;
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
type ref_6f2b3c7d08dd7c00df857b60b4d683f05362237b31b51cd9491c860d8af15ec5 = {
    name: "NestedRefType";
};