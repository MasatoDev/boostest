export function boostestUser<T>(args?: T): T {
	return ({
		'name':'string_val',
		'age':42,
		'sex':42,
		'from':from(),
		'details':details(),
		...args
	} as T);
}

export function from<T>(args?: T): T {
	return ({
		'country':'string_val',
		'city':'string_val',
		...args
	} as T);
}

export function details<T>(args?: T): T {
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
	return new Customer('string_val', 42, rank());
}

export function rank<T>(args?: T): T {
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
		'license':license(),
		...args
	} as T);
}

export function license<T>(args?: T): T {
	return ({
		'name':'string_val',
		...args
	} as T);
}

