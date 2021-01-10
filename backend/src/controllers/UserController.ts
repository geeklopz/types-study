import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "danilo", email: "danilo@danilocaetano.com.br" }];

export default {
	// Type TS
	async index(req: Request, res: Response) {
		res.json(users);
	},

	async create(req: Request, res: Response) {
		const emailService = new EmailService();

		// IMessageDTO
		emailService.sendMail({
			to: {
				name: "Danilo",
				email: "danilo@danilocaetano.com.br"
			},
			message: {
				subject: "Titulo do Email",
				body: "Corpo do Email"
			}
		});

		return res.send('Email Sendend Ok');
	},
};
