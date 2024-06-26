export function boostestJOB<T>(args?: Partial<T>): T {
  return {
    name: 'string_val',
    salary: 42,
    ...args,
  } as T;
}

export function boostestUser<T>(args?: Partial<T>): T {
  return {
    age: 42,
    from: from_boostestUser(),
    sex: 1,
    func: () => {},
    details: details_boostestUser(),
    thieKey: thieKey_boostestUser(),
    unknownKey: undefined,
    undefinedKey: undefined,
    anyKey: 'any',
    name: 'string_val',
    objectKey: {},
    shor_name: 'john',
    optionalKey: 'string_val',
    conditionalKey: 'string_val',
    nullKey: null,
    ...args,
  } as T;
}

export function from_boostestUser<T>(args?: Partial<T>): T {
  return {
    country: 'string_val',
    city: 'string_val',
    ...args,
  } as T;
}

export function details_boostestUser<T>(args?: Partial<T>): T {
  return {
    parentName: 'string_val',
    ...args,
  } as T;
}

export function boostestOS<T>(args?: Partial<T>): T {
  return {
    version: 42,
    name: 'string_val',
    license: license_boostestOS(),
    ...args,
  } as T;
}

export function license_boostestOS<T>(args?: Partial<T>): T {
  return {
    duration: 42,
    name: 'string_val',
    ...args,
  } as T;
}

export function boostestRank<T>(args?: Partial<T>): T {
  return {
    benefits: 'string_val',
    name: 'string_val',
    ...args,
  } as T;
}

export function boostestCustomer2<T extends abstract new (...args: any) => any>(Customer): T {
  return new Customer(rank_boostestCustomer2(), 'string_val', 42);
}

export function rank_boostestCustomer2<T>(args?: Partial<T>): T {
  return {
    name: 'string_val',
    benefits: 'string_val',
    ...args,
  } as T;
}

export function boostestCafe<T extends abstract new (...args: any) => any>(Cafe): T {
  return new Cafe('string_val');
}

export function boostestCustomer<T extends abstract new (...args: any) => any>(Customer): T {
  return new Customer(42, 'string_val', rank_boostestCustomer());
}

export function rank_boostestCustomer<T>(args?: Partial<T>): T {
  return {
    name: 'string_val',
    benefits: 'string_val',
    ...args,
  } as T;
}
