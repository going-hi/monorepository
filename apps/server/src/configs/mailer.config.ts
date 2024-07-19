import { ConfigService } from '@nestjs/config'
import type { MailerOptions } from '@nestjs-modules/mailer'

export const getMailerConfig = (configService: ConfigService): MailerOptions => ({
	transport: {
		host: configService.get('SMTP_HOST'),
		port: configService.get('SMTP_PORT'),
		auth: {
			user: configService.get('SMTP_EMAIL'),
			pass: configService.get('SMTP_PASSWORD')
		},
		secure: true
	},
	defaults: {
		from: `${configService.get('SMTP_SENDER_NAME')} ${configService.get('SMTP_EMAIL')}`
	}
})
