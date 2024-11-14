export function boostestTSTypeAliasTemplate<T>(args?: Partial<T>): T {
  return {
    boostestKey: "boostestValue",
    ...args,
  } as T;
}
