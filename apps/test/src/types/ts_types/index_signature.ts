export type IndexSignature = {
  [Str_Key: string]: number;
  [Num_Key: number]: number;
  // FIXME: symbol key
  [Symbol_Key: symbol]: boolean;
};
