import { Request, Response } from 'express';
import IRequest from '../interface/IRequest';

class ItemController {
	static async index(req: IRequest, res: Response) {
		res
			.json({
				message: 'get items.',
			})
			.status(200);
	}

	static async show(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'get item.',
			})
			.status(200);
	}

	static async create(req: IRequest, res: Response) {
		res
			.json({
				message: 'create item.',
			})
			.status(200);
	}

	static async update(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'update item.',
			})
			.status(200);
	}

	static async destroy(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'delete item.',
			})
			.status(200);
	}
}

export default ItemController;
