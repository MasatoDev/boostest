export function boostestClassNamedWorkerMock<T extends abstract new (...args: any) => any>(Customer, args?: ConstructorParameters<T>): T {
  return new Customer('sample string', 42);
}
export function boostestClassHelloMock<T extends abstract new (...args: any) => any>(Hello, args?: ConstructorParameters<T>): T {
  return new Hello('sample string', 'sample string');
}
export function boostestBusMock<T>(args?: T): T {
  return {
    name: 'mock_val',
    maxSpeed: 'default_new_val',
    additional: 'default_new_val',
    ...args,
  };
}
