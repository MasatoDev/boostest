export function boostestGenericsAliasType<T>(args?: Partial<T>): T {
	return {
		mapperType: {
			en: "test string data",
			fr: "test string data",
			it: "test string data",
			es: "test string data"
		},
		keyOfMapperType: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		innserGenericInitializer: {
			name: "test string data",
			innerGeneric: {
				name: "test string data",
				ver: 10,
				age: 10
			},
			innerGenericLiteral: "inner generic string"
		},
		butterflyWithGenerics: {
			en: "test string data",
			fr: "test string data",
			it: "test string data",
			es: "test string data"
		},
		nonNullable: "test string data",
		nestedPartial: { childPartial: {
			name: "test string data",
			ver: 10,
			age: 10
		} },
		partial: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		required: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		readonly: {
			name: "test string data",
			ver: 10,
			age: 10
		},
		extract: "D",
		extractRefUnion: "en",
		exclude: "B",
		onDirectRefUnionType: "fr",
		array: [],
		pick: { name: "test string data" },
		pickMulti: {
			ver: 10,
			age: 10
		},
		omit: {
			ver: 10,
			age: 10
		},
		classPara: new ref_377f51049605d4fe5bda230264c1c02fe5284ee5242be203e84b2fb5fb18d898({
			name: "test string data",
			innerGeneric: {
				name: "test string data",
				ver: 10,
				age: 10
			},
			innerGenericLiteral: "inner generic string"
		}, {
			en: "test string data",
			fr: "test string data",
			it: "test string data",
			es: "test string data"
		}, {
			name: "test string data",
			ver: 10,
			age: 10
		}, {
			en: "test string data",
			fr: "test string data",
			it: "test string data",
			es: "test string data"
		}, "test string data", { childPartial: {
			name: "test string data",
			ver: 10,
			age: 10
		} }, {
			name: "test string data",
			ver: 10,
			age: 10
		}, {
			name: "test string data",
			ver: 10,
			age: 10
		}, {
			name: "test string data",
			ver: 10,
			age: 10
		}, "D", "en", "B", "fr", [], { name: "test string data" }, {
			ver: 10,
			age: 10
		}, {
			ver: 10,
			age: 10
		}),
		classTypeofPara: ref_e1c3a06427f37cb210bd941647a9657fd9d48d3186083497b312942024557f1b,
		...args
	} as T;
}
