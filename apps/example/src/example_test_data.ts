export function boostestBuu<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'details':() => {
		},
		...args
	} as T);
}

export function boostestJOB<T>(args?: Partial<T>): T {
	return ({
		'name':'test data string',
		'salary':42,
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

