import { z } from 'zod'

export const getByIdParamSchema = z.preprocess(
	Number,
	z.number({ message: 'Параметр id должен быть числом' })
)
