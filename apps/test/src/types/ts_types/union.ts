export type TSAliasStringUnionType = "A" | "B" | "C";
export type TSAliasMixUnionType =
  | 50000
  | "A"
  | 1
  | true
  | TSAliasStringUnionType;

export type TSAliasMixUnionObjType = {
  ref_type: TSAliasMixUnionType;
  type: 50000 | "A" | 1 | true | TSAliasStringUnionType;
};

export interface TSInterfaceStringUnionType {
  type: "A" | "B" | "C";
}
export interface TSInterfaceMixUnionType {
  type: 50000 | "A" | 1 | true | TSAliasStringUnionType;
}
