import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

class AuthController {
	static async register(req: Request, res: Response) {
		let checkUser = await User.where('email', req.body.email);

		if (checkUser.length == 0) {
			await User.insert({
				name: req.body.name,
				email: req.body.email,
				password: bcrypt.hashSync(req.body.password, 10),
			});

			res
				.json({
					message: 'Successfully Registered!',
				})
				.status(200);
		} else {
			res
				.json({
					message: 'Unauthenticated.',
				})
				.status(401);
		}
	}

	static async login(req: Request, res: Response) {
		res
			.json({
				message: 'login.',
			})
			.status(200);
	}

	static async logout(req: Request, res: Response) {
		res
			.json({
				message: 'logout.',
			})
			.status(200);
	}
}

export default AuthController;
