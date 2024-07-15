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
		'symbolLiteral':Symbol(),
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
		'symbolLiteral':Symbol(),
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
	}, [], referenceLiteral_boostestLiteralTypeClass(), {}, 'string', 20, 10000000000000n, true, null, {}, [], Symbol(), {}, [], {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, refTypeInterface_boostestLiteralTypeClass());
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

