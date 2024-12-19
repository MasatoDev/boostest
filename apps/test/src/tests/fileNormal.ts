import {
  LiteralTypeAlias,
  LiteralTypeClass,
  LiteralTypeInterface,
} from "../types/ts_types/literal";

const literal = boostestNormalTsAliasOutput<LiteralTypeAlias>();
const interfaceRes = boostestNormalInterfaceOutput<LiteralTypeInterface>();
const classRes = boostestNormalClassOutput<LiteralTypeClass>();
