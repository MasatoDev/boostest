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

export function boostestLiteralType<T>(args?: Partial<T>): T {
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
		'referenceLiteral':referenceLiteral_boostestLiteralType(),
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
		...args
	} as T);
}

export function referenceLiteral_boostestLiteralType<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'ver':10,
		...args
	} as T);
}

export function boostestLiteralTypeClass<T extends abstract new (...args: any) => any>(LiteralTypeClass): T {
	return new LiteralTypeClass('test string data', 10, 9007199254740991, true, null, undefined, 'any', undefined, null, {}, null, () => {
	}, [], referenceLiteral_boostestLiteralTypeClass(), {}, {}, [], {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {});
}

export function referenceLiteral_boostestLiteralTypeClass<T>(args?: Partial<T>): T {
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
