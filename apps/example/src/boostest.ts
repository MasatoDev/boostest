export function boostestUser<T>(args?: T): T {
	return ({
		'name':'string_val',
		'age':42,
		'sex':42,
		'from':from_boostestUser(),
		'details':details_boostestUser(),
		...args
	} as T);
}

export function from_boostestUser<T>(args?: T): T {
	return ({
		'country':'string_val',
		'city':'string_val',
		...args
	} as T);
}

export function details_boostestUser<T>(args?: T): T {
	return ({
		'parentName':'string_val',
		...args
	} as T);
}

export function boostestJOB<T>(args?: T): T {
	return ({
		'name':'string_val',
		'salary':42,
		...args
	} as T);
}

export function boostestCustomer<T extends abstract new (...args: any) => any>(Customer, args?: ConstructorParameters<T>): T {
	return new Customer('string_val', rank_boostestCustomer(), 42);
}

export function rank_boostestCustomer<T>(args?: T): T {
	return ({
		'name':'string_val',
		'benefits':'string_val',
		...args
	} as T);
}

export function boostestOS<T>(args?: T): T {
	return ({
		'name':'string_val',
		'version':42,
		'license':license_boostestOS(),
		...args
	} as T);
}

export function license_boostestOS<T>(args?: T): T {
	return ({
		'name':'string_val',
		...args
	} as T);
}

