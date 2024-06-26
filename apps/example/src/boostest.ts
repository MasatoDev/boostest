export function boostestCustomer2<T extends abstract new (...args: any) => any>(Customer): T {
	return new Customer(42, rank_boostestCustomer2(), 'string_val');
}

export function rank_boostestCustomer2<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'benefits':'string_val',
		...args
	} as T);
}

export function boostestCafe<T extends abstract new (...args: any) => any>(Cafe): T {
	return new Cafe('string_val');
}

export function boostestJOB<T>(args?: Partial<T>): T {
	return ({
		'salary':42,
		'name':'string_val',
		...args
	} as T);
}

export function boostestCustomer<T extends abstract new (...args: any) => any>(Customer): T {
	return new Customer(rank_boostestCustomer(), 'string_val', 42);
}

export function rank_boostestCustomer<T>(args?: Partial<T>): T {
	return ({
		'benefits':'string_val',
		'name':'string_val',
		...args
	} as T);
}

export function boostestOS<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'version':42,
		'license':license_boostestOS(),
		...args
	} as T);
}

export function license_boostestOS<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'duration':42,
		...args
	} as T);
}

export function boostestUser<T>(args?: Partial<T>): T {
	return ({
		'nullKey':null,
		'objectKey':{},
		'arrayKey':[],
		'intersectionKey':{},
		'from':from_boostestUser(),
		'undefinedKey':undefined,
		'unknownKey':undefined,
		'conditionalKey':'string_val',
		'optionalKey':'string_val',
		'age':42,
		'sex':1,
		'indexedKey':{},
		'name':'string_val',
		'func':() => {
		},
		'shor_name':'john',
		'voidKey':null,
		'details':details_boostestUser(),
		'anyKey':'any',
		'thisKey':thisKey_boostestUser(),
		...args
	} as T);
}

export function from_boostestUser<T>(args?: Partial<T>): T {
	return ({
		'city':'string_val',
		'country':'string_val',
		...args
	} as T);
}

export function details_boostestUser<T>(args?: Partial<T>): T {
	return ({
		'parentName':'string_val',
		...args
	} as T);
}

export function boostestRank<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'benefits':'string_val',
		...args
	} as T);
}

