import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: '059eeb356157d0',
		pass: 'ccb6c96be9e192',
	},
})

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Henrique <carloshsouzaeng@gmail.com>',
			subject,
			html: body,
		})
	}
}
