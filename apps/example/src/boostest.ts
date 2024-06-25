export function boostestCustomer2<T extends abstract new (...args: any) => any>(Customer): T {
	return new Customer(42, 'string_val', rank_boostestCustomer2());
}

export function rank_boostestCustomer2<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'benefits':'string_val',
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

export function boostestCustomer<T extends abstract new (...args: any) => any>(Customer): T {
	return new Customer('string_val', rank_boostestCustomer(), 42);
}

export function rank_boostestCustomer<T>(args?: Partial<T>): T {
	return ({
		'name':'string_val',
		'benefits':'string_val',
		...args
	} as T);
}

export function boostestCafe<T extends abstract new (...args: any) => any>(Cafe): T {
	return new Cafe('string_val');
}

