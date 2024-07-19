import { ENodeEnv } from '@/common/enums'
import { envValidateZod } from '@/common/utils'
import { ConfigModuleOptions } from '@nestjs/config'
import { join } from 'path'
import { z } from 'zod'

const environmentVariables = z.object({
	SERVER_PORT: z.preprocess(Number, z.number()),
	VITE_CLIENT_URL: z.string(),
	VITE_ADMIN_URL: z.string(),
	VITE_SERVER_STATIC_URL: z.string(),
	VITE_SERVER_URL: z.string(),
	ACCESS_JWT_SECRET: z.string(),
	REFRESH_JWT_SECRET: z.string(),
	VITE_GOOGLE_REDIRECT_URL: z.string(),
	SERVER_WEBAPP_URL: z.string(),
	NODE_ENV: z.nativeEnum(ENodeEnv).optional(),
	BOT_TOKEN: z.string(),
	// * DataBase
	POSTGRES_HOST: z.string(),
	POSTGRES_PORT: z.preprocess(Number, z.number()),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	POSTGRES_DATABASE: z.string(),
	POSTGRES_SSL: z
		.enum(['true', 'false'])
		.default('false')
		.transform(value => value === 'true'),
	// * Redis
	REDIS_PORT: z.string(),
	REDIS_HOST: z.string(),
	REDIS_USERNAME: z.string(),
	REDIS_PASSWORD: z.string(),
	// * Google
	GOOGLE_CLIENT_ID: z.string(),
	GOOGLE_CLIENT_SECRET: z.string(),
	SMTP_EMAIL: z.string(),
	SMTP_PASSWORD: z.string(),
	SMTP_PORT: z.string(),
	SMTP_SENDER_NAME: z.string(),
	SMTP_HOST: z.string(),
	// * S3
	S3_ACCESS_KEY_ID: z.string(),
	S3_SECRET_ACCESS_KEY: z.string(),
	VITE_S3_BUCKET_NAME: z.string()
})

export const EnvConfigOptions: ConfigModuleOptions = {
	validate: envValidateZod(environmentVariables),
	isGlobal: true,
	envFilePath: join(__dirname, '../../../../', `/.env`)
}
