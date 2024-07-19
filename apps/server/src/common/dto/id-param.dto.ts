import { z } from 'zod'

export const idParamSchema = z.preprocess(Number, z.number({ message: 'Id должно быть числом' }))

export type IdParamDto = z.infer<typeof idParamSchema>
