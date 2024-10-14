import {
  LiteralTypeAlias,
  LiteralTypeClass,
  LiteralTypeInterface,
} from "@/ts_types/literal";

let _ = boostestLiteralAliasType<LiteralTypeAlias>();
let _ = boostestLiteralInterfaceType<LiteralTypeInterface>();
let _ = boostestLiteralTypeClass<typeof LiteralTypeClass>(LiteralTypeClass);
