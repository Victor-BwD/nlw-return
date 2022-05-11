import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';

const TRANSPORT = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cb65c9b62c3738",
      pass: "6c748e45ed7fc1"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        await TRANSPORT.sendMail({
        from: 'Equipe feedget <oi@feedget.com>',
        to: 'Victor B. Dornelles <victorbogdanow@gmail.com>',
        subject,
        html: body,
    })
    }
}