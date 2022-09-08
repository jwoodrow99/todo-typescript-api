import { Request, Response } from 'express';

class UserController {
	static async update(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'update user.',
			})
			.status(200);
	}

	static async delete(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'delete user.',
			})
			.status(200);
	}
}

export default UserController;
