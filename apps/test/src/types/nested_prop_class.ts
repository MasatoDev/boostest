import ComplexInterfaceChips from "./deepfiles/lib/comp_interface";

type NestedRefType = {
  name: "NestedRefType";
};

class ClassObj {
  anoChips: ComplexInterfaceChips;

  constructor(huga: { anoChips: ComplexInterfaceChips }) {
    this.anoChips = huga.anoChips;
  }
}

export default ClassObj;

export class NestedPropClass {
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
            l: string[];
          };
        };
      };
      m: {
        n: number[];
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
    x: (number | string)[];
    // y: Record<string, { z: number; aa: boolean }>;

    // Addition of type literals
    literalType: "option1" | "option2" | "option3";
    mixedType: { a: number } & { b: string }; // Intersection type
    conditionalType:
      | "active"
      | "inactive"
      | { status: "pending"; detail: string };

    extended: {
      id: number;
      info: {
        description: string;
        tags: ("tag1" | "tag2" | "tag3")[]; // Array of literal types
        settings: {
          mode: "auto" | "manual";
          level: 1 | 2 | 3; // Literal type (specific numbers)
          extras?: {
            feature: true | false;
            nestedRef: NestedRefType;
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
