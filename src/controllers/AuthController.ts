import { Request, Response } from 'express';

class AuthController {
	static async register(req: Request, res: Response) {
		res
			.json({
				message: 'register.',
			})
			.status(200);
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
