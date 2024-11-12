type DeepType = {
  name: "deeptype";
};

type NestedRefType = {
  name: "NestedRefType";
  deep: DeepType;
};

export type NestedType = {
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
  y: Record<string, { z: number; aa: boolean }>;

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
};

export type NestedInterface = {
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
  y: Record<string, { z: number; aa: boolean }>;

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
};
