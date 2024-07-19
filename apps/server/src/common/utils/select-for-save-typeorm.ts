import type { FindOptionsSelect } from 'typeorm'

export const selectForSaveTypeorm = <T extends object>(
	entity: T,
	select: FindOptionsSelect<T> = {}
): T => {
	const keys = Object.keys(select)
	return Object.entries(entity).reduce((acc, [key, value]) => {
		if (!keys.length) {
			acc[key] = value
			return acc
		}

		if (select[key]) {
			acc[key] = value
		}
		return acc
	}, {}) as T
}
