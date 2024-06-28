export function boostestResponseType<T>(args?: Partial<T>): T {
	return ({
		...args
	} as T);
}

