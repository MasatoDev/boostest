export function boostestGeneric<T>(args?: Partial<T>): T {
	return {
		"name": {
			"name": "test string data",
			"ver": 10,
			"age": 10
		},
		...args
	} as T;
}
