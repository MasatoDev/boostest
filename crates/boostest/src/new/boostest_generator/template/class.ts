export function boostestClassTemplate<T extends abstract new (...args: any) => any>(boostestClassName): T {
  return new boostestClassName('tempParams1');
}
