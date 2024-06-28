export function boostestUser<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'age':42,
		'sex':1,
		'shor_name':'john',
		'from':from_boostestUser(),
		'details':details_boostestUser(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test data string',
		'unknownKey':undefined,
		'thisKey':'ThisType',
		'conditionalKey':'test data string',
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{},
		'arrayKey':[],
		...args
	} as T);
}

export function from_boostestUser<T>(args?: Partial<T>): T {
	return ({
		'country':'test data string',
		'city':'test data string',
		...args
	} as T);
}

export function details_boostestUser<T>(args?: Partial<T>): T {
	return ({
		'parentName':'test data string',
		...args
	} as T);
}

