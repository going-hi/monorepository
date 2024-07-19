import { z } from 'zod'

// ! продумать и обновить

export enum ESortOrder {
	ASC = 'ASC',
	DESC = 'DESC'
}

export enum ESortOrderBy {
	CREATE_DATE = 'createDate'
}

export const SearchQueryDto = z.object({
	page: z
		.preprocess(Number, z.number({ message: 'Страница должна быть числом' }))
		.optional()
		.default(1),
	count: z
		.preprocess(
			Number,
			z.number({ message: 'Параметр "Количество элементов" должно быть числом' })
		)
		.optional()
		.default(10),
	sortBy: z
		.string({ message: 'Параметр Сортировка по должна быть строкой' })
		.optional()
		.default(ESortOrderBy.CREATE_DATE),
	sortOrder: z
		.nativeEnum(ESortOrder, { message: 'Порядок сортировки невалиден' })
		.optional()
		.default(ESortOrder.ASC),
	q: z.string({ message: "Параметр 'Поиск' должен быть строкой" }).optional(),
	searchBy: z.string({ message: "Параметр 'Поиск по' должен быть строкой" }).optional()
})

export type TSearchQueryDto = z.infer<typeof SearchQueryDto>
