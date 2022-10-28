import { Request, Response } from 'express';
import IRequest from '../interface/IRequest';

class UserController {
	static async update(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'update user.',
			})
			.status(200);
	}

	static async delete(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'delete user.',
			})
			.status(200);
	}
}

export default UserController;
