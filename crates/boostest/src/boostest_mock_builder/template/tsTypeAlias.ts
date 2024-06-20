export function boostestTSTypeAliasTemplate<T>(args?: T): T {
  return {
    boostestKey: 'boostestValue',
    ...args,
  };
}
