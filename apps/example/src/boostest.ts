export function boostestTSTypeAliasTemplate<T>(args?: T): T {
	return {
		'new_key':'new_val',
		...args
	};
}
