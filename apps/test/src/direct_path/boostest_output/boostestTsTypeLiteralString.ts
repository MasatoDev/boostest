export function boostestTsTypeLiteralString<T>(args?: Partial<T>): T {
	return { ...args } as T;
}
