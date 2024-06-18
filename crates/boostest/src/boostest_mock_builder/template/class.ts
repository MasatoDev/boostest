export function boostestClassTemplate<T extends abstract new (...args: any) => any>(boostestClassName, args: ConstructorParameters<T>): T {
  return new boostestClassName('tempParams1');
}
