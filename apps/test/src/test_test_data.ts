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
		'thisType':{},
		'unionType':'test string data',
		'conditionalType':true,
		'tsLiteralString':'string',
		'tsLiteralNumber':20,
		'tsLiteralBoolean':true,
		'tsNullLiteral':null,
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
		'thisType':{},
		'unionType':'test string data',
		'conditionalType':true,
		'tsLiteralString':'string',
		'tsLiteralNumber':20,
		'tsLiteralBoolean':true,
		'tsNullLiteral':null,
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
	}, [], referenceLiteral_boostestLiteralTypeClass(), {}, {}, [], {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, refTypeInterface_boostestLiteralTypeClass());
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

export function boostestTSAliasMixUnionType<T>(args?: Partial<T>): T {
	return 50000;
}

export function boostestTSAliasStringUnionType<T>(args?: Partial<T>): T {
	return 'A';
}

