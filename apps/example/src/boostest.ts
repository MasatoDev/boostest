export function boostestFuncJOB<T>(args?: T): T {
	return ({
		'name':'string_val',
		'salary':42,
		...args
	} as T);
}

export function boostestFuncUser<T>(args?: T): T {
	return ({
		'name':'string_val',
		'age':42,
		'sex':42,
		'from':from_boostestFuncUser(),
		'details':details_boostestFuncUser(),
		...args
	} as T);
}

export function from_boostestFuncUser<T>(args?: T): T {
	return ({
		'country':'string_val',
		'city':'string_val',
		...args
	} as T);
}

export function details_boostestFuncUser<T>(args?: T): T {
	return ({
		'parentName':'string_val',
		...args
	} as T);
}

