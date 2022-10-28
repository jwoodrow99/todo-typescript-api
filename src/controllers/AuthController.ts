import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel';
import IRequest from '../interface/IRequest';

class AuthController {
	static async register(req: IRequest, res: Response) {
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

	static async login(req: IRequest, res: Response) {
		let checkUser = await User.where('email', req.body.email);

		// Check that password matched stored hash
		if (bcrypt.compareSync(req.body.password, checkUser[0].password)) {
			// Create JWT
			let userJWT = jwt.sign(
				{
					id: checkUser[0].id,
					name: checkUser[0].name,
					email: checkUser[0].email,
				},
				process.env.TOKEN || ''
			);

			res
				.json({
					message: 'Authenticated.',
					access_token: userJWT,
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

	static async logout(req: IRequest, res: Response) {
		res
			.json({
				message: 'logout.',
			})
			.status(200);
	}
}

export default AuthController;
