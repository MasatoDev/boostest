import type { ComplexChipsType } from "./deepfiles/lib/comp_type_alias";
import RenamedNestedPropClass from "./nested_prop_class";

// WARN: constで代入するとtypeとして利用できない
// export const RenamedNestedPropClass = ClassObj;
export type RenamedComplexChipsType = ComplexChipsType;
