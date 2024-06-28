type Hoge = {
  name: string;
  details: () => void;
};

interface Boo {
  name: string;
  details: () => void;
}

export type { Hoge as AnoHoge, Boo as default };
