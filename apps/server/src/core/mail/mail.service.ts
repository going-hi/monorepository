import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailService {
	constructor(private readonly mailerService: MailerService) {}

	public async sendEmail(mail: ISendMailOptions) {
		try {
			await this.mailerService.sendMail(mail)
		} catch (e) {
			console.log(e)
			throw new HttpException('Сообщение не было отправлено', HttpStatus.UNPROCESSABLE_ENTITY)
		}
	}
}
