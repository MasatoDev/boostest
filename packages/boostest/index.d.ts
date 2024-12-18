/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export const enum TargetType {
  Class = 0,
  TSInterface = 1,
  TSTypeAlias = 2,
  Variable = 3
}
export interface OutputCode {
  code: string
  targetType: TargetType
  path: string
}
export interface DefaultValueOption {
  number: number
  string: string
  bigint: string
  any: string
  undefined: string
  boolean: boolean
  null: string
}
export interface OutputOption {
  single: boolean
  projectRootPath?: string
  defaultValueOption: DefaultValueOption
}
export interface ResolvedResult {
  outputCode?: Record<string, OutputCode>
  outputOption: OutputOption
}
export declare function resolve(path: string, libFilePath: string, tsConfigPath?: string | undefined | null): ResolvedResult
export declare function generatetest(output: Record<string, OutputCode>, outputOption: OutputOption): void
