export function boostestCustomer<T extends abstract new (...args: any) => any>(Store): T {
	return new Store('string_val', {}, {}, {}, {}, details_boostestCustomer(), () => {
	}, undefined, 'any', null, undefined, 'ThisType', {}, null, {}, {}, []);
}

export function from_boostestCustomer<T>(args?: Partial<T>): T {
	return ({
		'country':'test data string',
		'city':'test data string',
		...args
	} as T);
}

export function details_boostestCustomer<T>(args?: Partial<T>): T {
	return ({
		'ownerName':'test data string',
		...args
	} as T);
}

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

export function boostestBuu<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'details':() => {
		},
		...args
	} as T);
}

export function boostestAnoHoge<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'details':() => {
		},
		...args
	} as T);
}

export function boostestOS<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'version':42,
		'license':license_boostestOS(),
		...args
	} as T);
}

export function license_boostestOS<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'duration':42,
		...args
	} as T);
}

export function boostestRank<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'benefits':'test data string',
		...args
	} as T);
}

export function boostestCustomer2<T extends abstract new (...args: any) => any>(Customer): T {
	return new Customer('string_val', 42, rank_boostestCustomer2());
}

export function rank_boostestCustomer2<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'benefits':'test data string',
		...args
	} as T);
}

export function boostestExportDefaultClass<T extends abstract new (...args: any) => any>(ExportDefaultClass): T {
	return new ExportDefaultClass('string_val');
}

export function boostestJOB<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'salary':42,
		...args
	} as T);
}

export function boostestExportDefaultInterface<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'details':() => {
		},
		...args
	} as T);
}

