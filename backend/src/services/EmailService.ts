// Tipagem
interface IMailTo {
	name: string;
	email: string;
}

interface IMailMessage {
	subject: string;
	body: string;
	attachment?: string[]; // nao obrigatorio (?:)
}

interface IMessageDTO {
	to: IMailTo;
	message: IMailMessage;
}

// tipagem classe
interface IMailService {
	sendMail(request: IMessageDTO): void;
}

class EmailService implements IMailService {
	// Type TS
	sendMail({ to, message }: IMessageDTO) {
		console.log(`E-mail Enviado para ${to.name}: ${message.subject}`);
	}

	// sendMail(to: IMailTo, message: IMailMessage) {
	// 	console.log(`E-mail Enviado ${to.name}: ${message.subject}`);
	// }

}

export default EmailService;
