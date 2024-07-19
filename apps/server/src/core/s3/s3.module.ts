import { DynamicModule, Global, Module, Provider } from '@nestjs/common'
import { S3Service } from './s3.service'
import { S3_MODULE_OPTIONS } from './s3.constants'
import { IS3ModuleAsyncOptions } from './s3.interface'

@Global()
@Module({
	providers: [S3Service]
})
export class S3Module {
	public static forRootAsync(options: IS3ModuleAsyncOptions): DynamicModule {
		const asyncOptions = this.createAsyncOptionsProvider(options)
		return {
			module: S3Module,
			imports: options.imports,
			providers: [S3Service, asyncOptions],
			exports: [S3Service]
		}
	}

	private static createAsyncOptionsProvider(options: IS3ModuleAsyncOptions): Provider {
		return {
			provide: S3_MODULE_OPTIONS,
			useFactory: async (...args: any[]) => {
				const config = await options.useFactory(...args)
				return config
			},
			inject: options.inject ?? []
		}
	}
}
