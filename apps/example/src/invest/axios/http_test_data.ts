export function boostestFormDataVisitorHelpers<T>(args?: Partial<T>): T {
	return ({
		'defaultVisitor':defaultVisitor_boostestFormDataVisitorHelpers(),
		'convertValue':() => {
		},
		'isVisitable':() => {
		},
		...args
	} as T);
}

export function defaultVisitor_boostestFormDataVisitorHelpers<T>(args?: Partial<T>): T {
	return ({
		...args
	} as T);
}

export function boostestResponseType<T>(args?: Partial<T>): T {
	return ({
		...args
	} as T);
}

