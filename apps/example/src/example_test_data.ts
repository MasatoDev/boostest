export function boostestClassObj<T extends abstract new (...args: any) => any>(ClassObj): T {
	return new ClassObj({
		'name':'test string data',
		'chips':object_chips_ComplexInterfaceChips_boostestClassObj<any>()
	}, {
		'anoChips':huga_anoChips_ComplexInterfaceChips_boostestClassObj<any>()
	});
}

export function object_chips_ComplexInterfaceChips_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_CalbeeLightlySalted_boostestClassObj<any>(),
		'mostFav':mostFav_PringlesSourCreamAndOnion_boostestClassObj<any>(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_KettleBrandSeaSaltAndVinegar_boostestClassObj<any>(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{
			...intersectionKey_LayClassic_boostestClassObj<any>(),
			...intersectionKey_KoikeyaPridePotato_boostestClassObj<any>()
		},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_CalbeeLightlySalted_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_PringlesSourCreamAndOnion_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_KettleBrandSeaSaltAndVinegar_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function intersectionKey_LayClassic_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':"Lay's Classic",
		'price':130,
		...args
	} as T);
}

export function intersectionKey_KoikeyaPridePotato_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Koikeya Pride Potato',
		'price':150,
		...args
	} as T);
}

export function huga_anoChips_ComplexInterfaceChips_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'test string data',
		'age':10,
		'sex':1,
		'short_name':'john',
		'favorite':favorite_CalbeeLightlySalted_boostestClassObj<any>(),
		'mostFav':mostFav_PringlesSourCreamAndOnion_boostestClassObj<any>(),
		'func':() => {
		},
		'undefinedKey':undefined,
		'anyKey':'any',
		'nullKey':null,
		'optionalKey':'test string data',
		'unknownKey':undefined,
		'thisKey':{},
		'conditionalKey':conditionalKey_KettleBrandSeaSaltAndVinegar_boostestClassObj<any>(),
		'objectKey':{},
		'voidKey':null,
		'indexedKey':{},
		'intersectionKey':{
			...intersectionKey_LayClassic_boostestClassObj<any>(),
			...intersectionKey_KoikeyaPridePotato_boostestClassObj<any>()
		},
		'arrayKey':[],
		...args
	} as T);
}

export function favorite_CalbeeLightlySalted_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Calbee Lightly Salted',
		'price':120,
		...args
	} as T);
}

export function mostFav_PringlesSourCreamAndOnion_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Pringles Sour Cream & Onion',
		'price':200,
		...args
	} as T);
}

export function conditionalKey_KettleBrandSeaSaltAndVinegar_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Kettle Brand Sea Salt & Vinegar',
		'price':250,
		...args
	} as T);
}

export function intersectionKey_LayClassic_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':"Lay's Classic",
		'price':130,
		...args
	} as T);
}

export function intersectionKey_KoikeyaPridePotato_boostestClassObj<T>(args?: Partial<T>): T {
	return ({
		'name':'Koikeya Pride Potato',
		'price':150,
		...args
	} as T);
}

