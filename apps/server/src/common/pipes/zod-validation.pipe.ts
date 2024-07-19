import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { ZodSchema } from 'zod'
import { EZodPipeType } from '../enums'

type ZodValid = {
	schema: ZodSchema
	type: EZodPipeType
}

export class ZodValidationPipe implements PipeTransform {
	constructor(private validations: ZodValid[] | ZodValid) {}

	public transform(value: unknown, metadata: ArgumentMetadata) {
		try {
			if (Array.isArray(this.validations)) {
				const data = this.validations.find(obj => obj.type === metadata.type)
				if (data) {
					const parsedValue = data.schema.parse(value)
					return parsedValue
				}
				return value
			}
			if (metadata.type === this.validations.type) {
				const parsedValue = this.validations.schema.parse(value)
				return parsedValue
			}
			return value
		} catch (error) {
			const messages = []
			const zodErrors = error.issues ?? []
			zodErrors.forEach(el => messages.push(el.message))
			throw new BadRequestException(messages)
		}
	}
}
