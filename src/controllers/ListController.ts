import { Request, Response } from 'express';
import IRequest from '../interface/IRequest';
import ListModel from '../models/ListModel';

class ListController {
	static async index(req: IRequest, res: Response) {
		let lists = await ListModel.query().where('user_id', req.user.id);
		res
			.json({
				lists: lists,
				message: 'get lists.',
			})
			.status(200);
	}

	static async show(req: IRequest, res: Response) {
		let list = await ListModel.query()
			.where('user_id', req.user.id)
			.andWhere('id', req.params.id)
			.first();
		res
			.json({
				list: list,
				message: 'get list.',
			})
			.status(200);
	}

	static async create(req: IRequest, res: Response) {
		let list = await ListModel.query().insert({
			user_id: req.user.id,
			title: req.body.title,
			description: req.body.description,
		});

		res
			.json({
				list: await ListModel.query().where('id', list[0]).first(),
				message: 'create list.',
			})
			.status(200);
	}

	static async update(req: IRequest, res: Response) {
		await ListModel.query()
			.where('id', req.params.id)
			.andWhere('user_id', req.user.id)
			.update({
				title: req.body.title,
				description: req.body.description,
			});

		res
			.json({
				list: await ListModel.query()
					.where('id', req.params.id)
					.andWhere('user_id', req.user.id)
					.first(),
				message: 'update list.',
			})
			.status(200);
	}

	static async destroy(req: IRequest, res: Response) {
		await ListModel.query()
			.where('id', req.params.id)
			.andWhere('user_id', req.user.id)
			.del();

		res
			.json({
				message: 'delete list.',
			})
			.status(200);
	}
}

export default ListController;
