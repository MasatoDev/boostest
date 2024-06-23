export function boostestUser<T>(args?: T): T {
	return ({
		'name':'string_val',
		'age':42,
		'sex':42,
		'from':'default_val(unimplemented)',
		'details':'default_val(unimplemented)',
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
	return new Customer('string_val', 42);
}

export function boostestOS<T>(args?: T): T {
	return ({
		'name':'string_val',
		'version':42,
		'license':'default_val(unimplemented)',
		...args
	} as T);
}

