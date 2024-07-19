import { Inject } from '@nestjs/common'
import { S3_MODULE_OPTIONS } from './s3.constants'
import {
	DeleteObjectsCommand,
	PutObjectCommand,
	S3Client,
	S3ClientConfigType
} from '@aws-sdk/client-s3'
import { ConfigService } from '@nestjs/config'

type TUploadImageItem = {
	Key: string
	Body: Buffer
}

export class S3Service {
	private s3: S3Client

	constructor(
		@Inject(S3_MODULE_OPTIONS) options: S3ClientConfigType,
		private readonly configService: ConfigService
	) {
		this.s3 = new S3Client(options)
	}

	public async deleteMany(keys: string[]) {
		try {
			return this.s3.send(
				new DeleteObjectsCommand({
					Bucket: this.configService.get('VITE_S3_BUCKET_NAME'),
					Delete: {
						Objects: keys.map(Key => ({ Key }))
					}
				})
			)
		} catch (e) {
			console.log(e)
			return null
		}
	}

	public async uploadMany(images: TUploadImageItem[]) {
		try {
			const uploadImages = images.map(i =>
				this.s3.send(
					new PutObjectCommand({
						Bucket: this.configService.get('VITE_S3_BUCKET_NAME'),
						...i
					})
				)
			)
			return Promise.all(uploadImages)
		} catch (e) {
			console.log(e)
			return null
		}
	}
}
