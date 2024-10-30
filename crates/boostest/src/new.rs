pub mod boostest_manager;
/**


target_definition

[Needs]
- info for loading target code from the file
  - specifier: import from 'hofe' <- finally
  - span: Span
- type: Class | TSInterfaceDeclaration | TSTypeAliasDeclaration


[Process]
- import logic(Separation of comcerns) <- in progress of resolve target file
- analysis status??(SoC)
- mock name?? (SoC)
  - mockname & prop_keyname

[Props]
- ref_properties
- when props is reference type then add to ref_properties


[Resolve]
- detect boostest function and add target_difinition struct
- resolve target_definition
    - resolve import
    - fallback tsserver

- build test data with target_difinition
- write them to new test data file

*/
pub mod boostest_target;
pub mod boostest_utils;
