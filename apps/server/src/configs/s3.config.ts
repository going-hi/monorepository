import type { S3ClientConfigType } from '@aws-sdk/client-s3'
import { ConfigService } from '@nestjs/config'

export const getS3Config = (configService: ConfigService): S3ClientConfigType => ({
	credentials: {
		accessKeyId: configService.get('S3_ACCESS_KEY_ID'),
		secretAccessKey: configService.get('S3_SECRET_ACCESS_KEY')
	},
	endpoint: 'https://s3.timeweb.cloud',
	region: 'ru-1',
	apiVersion: 'latest',
	forcePathStyle: true
})
