import { Request, Response } from 'express';
import IRequest from '../interface/IRequest';
import UserModel from '../models/UserModel';

class UserController {
	static async update(req: IRequest, res: Response) {
		if (req.params.user_id == req.user.id) {
			await UserModel.query().where('id', req.params.user_id).update({
				name: req.body.name,
				email: req.body.email,
			});

			let updatedUser = await UserModel.query()
				.where('id', req.params.user_id)
				.first();

			res
				.json({
					user: {
						id: updatedUser.id,
						name: updatedUser.name,
						email: updatedUser.email,
					},
					message: 'update user.',
				})
				.status(200);
		} else {
			res
				.json({
					id: req.params.user_id,
					message: 'This user cannot be updated',
				})
				.status(401);
		}
	}

	static async delete(req: IRequest, res: Response) {
		if (req.params.user_id == req.user.id) {
			await UserModel.query().where('id', req.params.user_id).del();
			res
				.json({
					message: 'delete user.',
				})
				.status(200);
		} else {
			res
				.json({
					message: 'User cannot be deleted.',
				})
				.status(200);
		}
	}
}

export default UserController;
