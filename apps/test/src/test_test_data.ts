export function boostestAccessorClass<T extends abstract new (...args: any) => any>(AccessorClass): T {
	return new AccessorClass('test string data', 10, 10);
}

export function boostestAnoExportDefaultClass<T extends abstract new (...args: any) => any>(ExportDefaultClass): T {
	return new ExportDefaultClass('test string data', chips_boostestAnoExportDefaultClass());
}

export function chips_boostestAnoExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestAnoExportDefaultClass(),
		'mostFav':mostFav_boostestAnoExportDefaultClass(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestAnoExportDefaultClass(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestAnoExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestAnoExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestAnoExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestAnoExportDefaultInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'chips':chips_boostestAnoExportDefaultInterface(),
		...args
	} as T);
}

export function chips_boostestAnoExportDefaultInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestAnoExportDefaultInterface(),
		'mostFav':mostFav_boostestAnoExportDefaultInterface(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestAnoExportDefaultInterface(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestAnoExportDefaultInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestAnoExportDefaultInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestAnoExportDefaultInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestAnoExportNamedDeclClass<T extends abstract new (...args: any) => any>(ExportNamedDeclClass): T {
	return new ExportNamedDeclClass('test string data', chips_boostestAnoExportNamedDeclClass());
}

export function chips_boostestAnoExportNamedDeclClass<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestAnoExportNamedDeclClass(),
		'mostFav':mostFav_boostestAnoExportNamedDeclClass(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestAnoExportNamedDeclClass(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestAnoExportNamedDeclClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestAnoExportNamedDeclClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestAnoExportNamedDeclClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestAnoMixInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'chips':chips_boostestAnoMixInterface(),
		...args
	} as T);
}

export function chips_boostestAnoMixInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestAnoMixInterface(),
		'mostFav':mostFav_boostestAnoMixInterface(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestAnoMixInterface(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestAnoMixInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestAnoMixInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestAnoMixInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestExportDefaultClass<T extends abstract new (...args: any) => any>(ExportDefaultClass): T {
	return new ExportDefaultClass('test string data', chips_boostestExportDefaultClass());
}

export function chips_boostestExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestExportDefaultClass(),
		'mostFav':mostFav_boostestExportDefaultClass(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestExportDefaultClass(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestExportDefaultClass<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestExportDefaultClassWithDecl<T extends abstract new (...args: any) => any>(ExportDefaultClassWithDecl): T {
	return new ExportDefaultClassWithDecl('test string data', chips_boostestExportDefaultClassWithDecl());
}

export function chips_boostestExportDefaultClassWithDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestExportDefaultClassWithDecl(),
		'mostFav':mostFav_boostestExportDefaultClassWithDecl(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestExportDefaultClassWithDecl(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestExportDefaultClassWithDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestExportDefaultClassWithDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestExportDefaultClassWithDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestExportDefaultNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'chips':chips_boostestExportDefaultNamedDecl(),
		...args
	} as T);
}

export function chips_boostestExportDefaultNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestExportDefaultNamedDecl(),
		'mostFav':mostFav_boostestExportDefaultNamedDecl(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestExportDefaultNamedDecl(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestExportDefaultNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestExportDefaultNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestExportDefaultNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestExportNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestExportNamedDecl(),
		'mostFav':mostFav_boostestExportNamedDecl(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestExportNamedDecl(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestExportNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestExportNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestExportNamedDecl<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestExportNamedDeclInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'chips':chips_boostestExportNamedDeclInterface(),
		...args
	} as T);
}

export function chips_boostestExportNamedDeclInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestExportNamedDeclInterface(),
		'mostFav':mostFav_boostestExportNamedDeclInterface(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestExportNamedDeclInterface(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestExportNamedDeclInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestExportNamedDeclInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestExportNamedDeclInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestLiteralAliasType<T>(args?: Partial<T>): T {
	return ({
		'stringLiteral':'test string data',
		'numberLiteral':10,
		'bigintLiteral':9007199254740991,
		'booleanLiteral':true,
		'nullLiteral':null,
		'undefinedId':undefined,
		'anyLiteral':'any',
		'unknownLiteral':undefined,
		'neverLiteral':null,
		'objectLiteral':{},
		'voidLiteral':null,
		'functionLiteral':() => {
		},
		'arrayLiteral':[],
		'referenceLiteral':referenceLiteral_boostestLiteralAliasType(),
		'unionType':'test string data',
		'conditionalType':true,
		'tsLiteralString':'string',
		'tsLiteralNumber':20,
		'tsBigInt':10000000000000n,
		'tsLiteralBoolean':true,
		'tsNullLiteral':null,
		'tsObject':{},
		'tsArray':[],
		'thisType':{},
		'array':[],
		'partial':{},
		'required':{},
		'readonly':{},
		'pick':{},
		'omit':{},
		'extract':{},
		'exclude':{},
		'nonNullable':{},
		'parameters':{},
		'constructorParameters':{},
		'returnType':{},
		'instanceType':{},
		'promise':{},
		'classType':{},
		'refTypeInterface':refTypeInterface_boostestLiteralAliasType(),
		...args
	} as T);
}

export function referenceLiteral_boostestLiteralAliasType<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'ver':10,
		...args
	} as T);
}

export function refTypeInterface_boostestLiteralAliasType<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'ver':10,
		...args
	} as T);
}

export function boostestLiteralInterfaceType<T>(args?: Partial<T>): T {
	return ({
		'stringLiteral':'test string data',
		'numberLiteral':10,
		'bigintLiteral':9007199254740991,
		'booleanLiteral':true,
		'nullLiteral':null,
		'undefinedId':undefined,
		'anyLiteral':'any',
		'unknownLiteral':undefined,
		'neverLiteral':null,
		'objectLiteral':{},
		'voidLiteral':null,
		'functionLiteral':() => {
		},
		'arrayLiteral':[],
		'referenceLiteral':referenceLiteral_boostestLiteralInterfaceType(),
		'unionType':'test string data',
		'conditionalType':true,
		'tsLiteralString':'string',
		'tsLiteralNumber':20,
		'tsBigInt':10000000000000n,
		'tsLiteralBoolean':true,
		'tsNullLiteral':null,
		'tsObject':{},
		'tsArray':[],
		'thisType':{},
		'array':[],
		'partial':{},
		'required':{},
		'readonly':{},
		'pick':{},
		'omit':{},
		'extract':{},
		'exclude':{},
		'nonNullable':{},
		'parameters':{},
		'constructorParameters':{},
		'returnType':{},
		'instanceType':{},
		'promise':{},
		'classType':{},
		'refTypeInterface':refTypeInterface_boostestLiteralInterfaceType(),
		...args
	} as T);
}

export function referenceLiteral_boostestLiteralInterfaceType<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'ver':10,
		...args
	} as T);
}

export function refTypeInterface_boostestLiteralInterfaceType<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'ver':10,
		...args
	} as T);
}

export function boostestLiteralTypeClass<T extends abstract new (...args: any) => any>(LiteralTypeClass): T {
	return new LiteralTypeClass('test string data', 10, 9007199254740991, true, null, undefined, 'any', undefined, null, {}, null, () => {
	}, [], referenceLiteral_boostestLiteralTypeClass(), {}, 'string', 20, 10000000000000n, true, null, {}, [], {}, [], {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, refTypeInterface_boostestLiteralTypeClass());
}

export function referenceLiteral_boostestLiteralTypeClass<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'ver':10,
		...args
	} as T);
}

export function refTypeInterface_boostestLiteralTypeClass<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'ver':10,
		...args
	} as T);
}

export function boostestMixCompTSAlias<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_boostestMixCompTSAlias(),
		'mostFav':mostFav_boostestMixCompTSAlias(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_boostestMixCompTSAlias(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_boostestMixCompTSAlias<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_boostestMixCompTSAlias<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_boostestMixCompTSAlias<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function boostestTsLiteralArrayUnionType<T>(args?: Partial<T>): T {
	return [];
}

export function boostestTsLiteralFunctionUnionType<T>(args?: Partial<T>): T {
	return () => {
	};
}

export function boostestTsLiteralNumberUnionType<T>(args?: Partial<T>): T {
	return 1;
}

export function boostestTsLiteralObjectUnionType<T>(args?: Partial<T>): T {
	return {};
}

export function boostestTsLiteralTypeStringUnionType<T>(args?: Partial<T>): T {
	return 'A';
}

export function boostestTsTypeLiteralArray<T>(args?: Partial<T>): T {
	return [];
}

export function boostestTsTypeLiteralBoolean<T>(args?: Partial<T>): T {
	return true;
}

export function boostestTsTypeLiteralFunction<T>(args?: Partial<T>): T {
	return key_name_boostestTsTypeLiteralFunction();
}

export function boostestTsTypeLiteralLiteralArrayType<T>(args?: Partial<T>): T {
	return [];
}

export function boostestTsTypeLiteralLiteralFunctionType<T>(args?: Partial<T>): T {
	return () => {
	};
}

export function boostestTsTypeLiteralLiteralNumberType<T>(args?: Partial<T>): T {
	return 42;
}

export function boostestTsTypeLiteralLiteralObjectType<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		...args
	} as T);
}

export function boostestTsTypeLiteralLiteralSymbolType<T>(args?: Partial<T>): T {
	return {};
}

export function boostestTsTypeLiteralLiteralTypeString<T>(args?: Partial<T>): T {
	return 'string';
}

export function boostestTsTypeLiteralNull<T>(args?: Partial<T>): T {
	return null;
}

export function boostestTsTypeLiteralNumber<T>(args?: Partial<T>): T {
	return 10;
}

export function boostestTsTypeLiteralObject<T>(args?: Partial<T>): T {
	return {};
}

export function boostestTsTypeLiteralString<T>(args?: Partial<T>): T {
	return 'test string data';
}

export function boostestTsTypeLiteralSymbol<T>(args?: Partial<T>): T {
	return {};
}

export function boostestTsTypeLiteralUndefined<T>(args?: Partial<T>): T {
	return undefined;
}

export function boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return ({
		'literalString':literalString_boostestUseTSTypeLiteralAlias(),
		'literalLiteralString':literalLiteralString_boostestUseTSTypeLiteralAlias(),
		'literalStringUnion':literalStringUnion_boostestUseTSTypeLiteralAlias(),
		'literalNumber':literalNumber_boostestUseTSTypeLiteralAlias(),
		'literalLiteralNumber':literalLiteralNumber_boostestUseTSTypeLiteralAlias(),
		'literalNumberUnion':literalNumberUnion_boostestUseTSTypeLiteralAlias(),
		'literalBoolean':literalBoolean_boostestUseTSTypeLiteralAlias(),
		'literalLiteralBoolean':literalLiteralBoolean_boostestUseTSTypeLiteralAlias(),
		'literalBooleanUnion':literalBooleanUnion_boostestUseTSTypeLiteralAlias(),
		'literalNull':literalNull_boostestUseTSTypeLiteralAlias(),
		'literalUndefined':literalUndefined_boostestUseTSTypeLiteralAlias(),
		'literalArray':literalArray_boostestUseTSTypeLiteralAlias(),
		'literalLiteralArray':literalLiteralArray_boostestUseTSTypeLiteralAlias(),
		'literalArrayUnion':literalArrayUnion_boostestUseTSTypeLiteralAlias(),
		'literalObject':literalObject_boostestUseTSTypeLiteralAlias(),
		'literalLiteralObject':literalLiteralObject_boostestUseTSTypeLiteralAlias(),
		'literalObjectUnion':literalObjectUnion_boostestUseTSTypeLiteralAlias(),
		'literalFunction':literalFunction_boostestUseTSTypeLiteralAlias(),
		'literalLiteralFunction':literalLiteralFunction_boostestUseTSTypeLiteralAlias(),
		'literalFunctionUnion':literalFunctionUnion_boostestUseTSTypeLiteralAlias(),
		'literalBigInt':literalBigInt_boostestUseTSTypeLiteralAlias(),
		'literalLiteralBigInt':literalLiteralBigInt_boostestUseTSTypeLiteralAlias(),
		'literalBigIntUnion':literalBigIntUnion_boostestUseTSTypeLiteralAlias(),
		'literalSymbol':literalSymbol_boostestUseTSTypeLiteralAlias(),
		'literalLiteralSymbol':literalLiteralSymbol_boostestUseTSTypeLiteralAlias(),
		...args
	} as T);
}

export function literalString_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 'test string data';
}

export function literalLiteralString_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 'string';
}

export function literalStringUnion_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 'A';
}

export function literalNumber_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 10;
}

export function literalLiteralNumber_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 42;
}

export function literalNumberUnion_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 1;
}

export function literalBoolean_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return true;
}

export function literalLiteralBoolean_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return true;
}

export function literalBooleanUnion_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return true;
}

export function literalNull_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return null;
}

export function literalUndefined_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return undefined;
}

export function literalArray_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return [];
}

export function literalLiteralArray_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return [];
}

export function literalArrayUnion_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return [];
}

export function literalObject_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return {};
}

export function literalLiteralObject_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		...args
	} as T);
}

export function literalObjectUnion_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return {};
}

export function literalFunction_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return key_name_boostestUseTSTypeLiteralAlias();
}

export function literalLiteralFunction_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return () => {
	};
}

export function literalFunctionUnion_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return () => {
	};
}

export function literalBigInt_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 9007199254740991;
}

export function literalLiteralBigInt_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 123n;
}

export function literalBigIntUnion_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return 1n;
}

export function literalSymbol_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return {};
}

export function literalLiteralSymbol_boostestUseTSTypeLiteralAlias<T>(args?: Partial<T>): T {
	return {};
}

export function boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return ({
		'literalString':literalString_boostestUseTSTypeLiteralInterface(),
		'literalLiteralString':literalLiteralString_boostestUseTSTypeLiteralInterface(),
		'literalStringUnion':literalStringUnion_boostestUseTSTypeLiteralInterface(),
		'literalNumber':literalNumber_boostestUseTSTypeLiteralInterface(),
		'literalLiteralNumber':literalLiteralNumber_boostestUseTSTypeLiteralInterface(),
		'literalNumberUnion':literalNumberUnion_boostestUseTSTypeLiteralInterface(),
		'literalBoolean':literalBoolean_boostestUseTSTypeLiteralInterface(),
		'literalLiteralBoolean':literalLiteralBoolean_boostestUseTSTypeLiteralInterface(),
		'literalBooleanUnion':literalBooleanUnion_boostestUseTSTypeLiteralInterface(),
		'literalNull':literalNull_boostestUseTSTypeLiteralInterface(),
		'literalUndefined':literalUndefined_boostestUseTSTypeLiteralInterface(),
		'literalArray':literalArray_boostestUseTSTypeLiteralInterface(),
		'literalLiteralArray':literalLiteralArray_boostestUseTSTypeLiteralInterface(),
		'literalArrayUnion':literalArrayUnion_boostestUseTSTypeLiteralInterface(),
		'literalObject':literalObject_boostestUseTSTypeLiteralInterface(),
		'literalLiteralObject':literalLiteralObject_boostestUseTSTypeLiteralInterface(),
		'literalObjectUnion':literalObjectUnion_boostestUseTSTypeLiteralInterface(),
		'literalFunction':literalFunction_boostestUseTSTypeLiteralInterface(),
		'literalLiteralFunction':literalLiteralFunction_boostestUseTSTypeLiteralInterface(),
		'literalFunctionUnion':literalFunctionUnion_boostestUseTSTypeLiteralInterface(),
		'literalBigInt':literalBigInt_boostestUseTSTypeLiteralInterface(),
		'literalLiteralBigInt':literalLiteralBigInt_boostestUseTSTypeLiteralInterface(),
		'literalBigIntUnion':literalBigIntUnion_boostestUseTSTypeLiteralInterface(),
		'literalSymbol':literalSymbol_boostestUseTSTypeLiteralInterface(),
		'literalLiteralSymbol':literalLiteralSymbol_boostestUseTSTypeLiteralInterface(),
		...args
	} as T);
}

export function literalString_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 'test string data';
}

export function literalLiteralString_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 'string';
}

export function literalStringUnion_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 'A';
}

export function literalNumber_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 10;
}

export function literalLiteralNumber_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 42;
}

export function literalNumberUnion_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 1;
}

export function literalBoolean_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return true;
}

export function literalLiteralBoolean_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return true;
}

export function literalBooleanUnion_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return true;
}

export function literalNull_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return null;
}

export function literalUndefined_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return undefined;
}

export function literalArray_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return [];
}

export function literalLiteralArray_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return [];
}

export function literalArrayUnion_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return [];
}

export function literalObject_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return {};
}

export function literalLiteralObject_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		...args
	} as T);
}

export function literalObjectUnion_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return {};
}

export function literalFunction_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return key_name_boostestUseTSTypeLiteralInterface();
}

export function literalLiteralFunction_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return () => {
	};
}

export function literalFunctionUnion_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return () => {
	};
}

export function literalBigInt_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 9007199254740991;
}

export function literalLiteralBigInt_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 123n;
}

export function literalBigIntUnion_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return 1n;
}

export function literalSymbol_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return {};
}

export function literalLiteralSymbol_boostestUseTSTypeLiteralInterface<T>(args?: Partial<T>): T {
	return {};
}

