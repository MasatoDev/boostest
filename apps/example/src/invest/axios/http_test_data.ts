export function boostestFormDataVisitorHelpers<T>(args?: Partial<T>): T {
	return ({
		'defaultVisitor':defaultVisitor_SerializerVisitor_boostestFormDataVisitorHelpers<any>(),
		'convertValue':(value: any) => {
			return 'any';
		},
		'isVisitable':(value: any) => {
			return true;
		},
		...args
	} as T);
}

export function defaultVisitor_SerializerVisitor_boostestFormDataVisitorHelpers<T>(args?: Partial<T>): T {
	return ({
		...args
	} as T);
}

export function boostestResponseType<T>(args?: Partial<T>): T {
	return ({
		...args
	} as T);
}

