import { ModuleMetadata } from '@nestjs/common'
import type { S3ClientConfigType } from '@aws-sdk/client-s3'

export interface IS3ModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
	useFactory: (...args: any[]) => Promise<S3ClientConfigType> | S3ClientConfigType
	inject?: any[]
}
