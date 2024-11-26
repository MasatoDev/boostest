export function boostestGenericsAliasType<T>(args?: Partial<T>): T {
	return {
		"mapperType": {
			"en": "test string data",
			"fr": "test string data",
			"it": "test string data",
			"es": "test string data"
		},
		"keyOfMapperType": {
			"name": "test string data",
			"ver": 10,
			"age": 10
		},
		"innserGenericInitializer": {
			"name": "test string data",
			"innerGeneric": {
				"name": "test string data",
				"ver": 10,
				"age": 10
			},
			"innerGenericLiteral": "inner generic string"
		},
		"butterflyWithGenerics": {
			"en": "test string data",
			"fr": "test string data",
			"it": "test string data",
			"es": "test string data"
		},
		"nonNullable": "test string data",
		"nestedPartial": { "childPartial": {
			"name": "test string data",
			"ver": 10,
			"age": 10
		} },
		"partial": {
			"name": "test string data",
			"ver": 10,
			"age": 10
		},
		"required": {
			"name": "test string data",
			"ver": 10,
			"age": 10
		},
		"readonly": {
			"name": "test string data",
			"ver": 10,
			"age": 10
		},
		"extract": "D",
		"extractRefUnion": "en",
		"exclude": "B",
		"onDirectRefUnionType": "fr",
		"array": [],
		"pick": { "name": "test string data" },
		"pickMulti": {
			"ver": 10,
			"age": 10
		},
		"omit": {
			"ver": 10,
			"age": 10
		},
		...args
	} as T;
}
