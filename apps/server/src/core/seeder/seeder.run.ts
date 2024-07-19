import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { ESeederMode } from './enums'
;(async function () {
	const { MODE } = process.env as { MODE: ESeederMode | undefined }
	// const MODE = ESeederMode.PRODUCTS as ESeederMode | undefined
	if (!MODE) {
		throw new Error('Укажите режим для сидера')
	}

	const app = await NestFactory.create(AppModule)

	switch (MODE) {
		case ESeederMode.ALL:
			{
			}
			break
	}

	await app.close()
	console.log('Finish seed')
	process.exit()
})()
