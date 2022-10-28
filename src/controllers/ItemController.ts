import { Request, Response } from 'express';
import IRequest from '../interface/IRequest';
import ListModel from '../models/ListModel';
import ItemModel from '../models/ItemModel';

class ItemController {
	static async index(req: IRequest, res: Response) {
		let list = await ListModel.query()
			.where('user_id', req.user.id)
			.andWhere('id', req.params.list_id)
			.first();

		let items = await ItemModel.query().where('list_id', list.id);
		res
			.json({
				list: list,
				items: items,
				message: 'get items.',
			})
			.status(200);
	}

	static async show(req: IRequest, res: Response) {
		let list = await ListModel.query()
			.where('user_id', req.user.id)
			.andWhere('id', req.params.list_id)
			.first();

		let item = await ItemModel.query()
			.where('list_id', list.id)
			.andWhere('id', req.params.item_id)
			.first();
		res
			.json({
				list: list,
				item: item,
				message: 'get item.',
			})
			.status(200);
	}

	static async create(req: IRequest, res: Response) {
		let list = await ListModel.query()
			.where('user_id', req.user.id)
			.andWhere('id', req.params.list_id)
			.first();

		let item = await ItemModel.query().insert({
			list_id: list.id,
			title: req.body.title,
			done: false,
		});
		res
			.json({
				list: list,
				item: await ItemModel.query().where('id', item[0]).first(),
				message: 'create item.',
			})
			.status(200);
	}

	static async update(req: IRequest, res: Response) {
		let list = await ListModel.query()
			.where('user_id', req.user.id)
			.andWhere('id', req.params.list_id)
			.first();

		await ItemModel.query()
			.where('id', req.params.item_id)
			.andWhere('list_id', list.id)
			.update({
				title: req.body.title,
				done: req.body.done,
			});

		res
			.json({
				list: list,
				item: await ItemModel.query()
					.where('id', req.params.item_id)
					.andWhere('list_id', list.id)
					.first(),
				message: 'update item.',
			})
			.status(200);
	}

	static async destroy(req: IRequest, res: Response) {
		let list = await ListModel.query()
			.where('user_id', req.user.id)
			.andWhere('id', req.params.list_id)
			.first();

		await ItemModel.query()
			.where('id', req.params.item_id)
			.andWhere('list_id', list.id)
			.del();
		res
			.json({
				id: req.params.id,
				message: 'delete item.',
			})
			.status(200);
	}
}

export default ItemController;
