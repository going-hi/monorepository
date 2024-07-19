import { z } from 'zod'

export const FiltersIdsDto = z.object({
	filters: z
		.preprocess(
			(val: string) => JSON.parse(val),
			z.object({
				ids: z.array(z.number())
			})
		)
		.optional()
})

export type TFiltersIdsDto = z.infer<typeof FiltersIdsDto>
