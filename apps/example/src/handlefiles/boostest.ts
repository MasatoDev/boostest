export function boostestUser<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'age':42,
		'sex':42,
		'from':from_boostestUser(),
		'details':details_boostestUser(),
		...args
	} as T);
}

export function from_boostestUser<T>(args?: Partial<T>): T {
	return ({
		'country':'string_val',
		'city':'string_val',
		...args
	} as T);
}

export function details_boostestUser<T>(args?: Partial<T>): T {
	return ({
		'parentName':'string_val',
		...args
	} as T);
}

export function boostestJOB<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'salary':42,
		...args
	} as T);
}

