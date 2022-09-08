import { Request, Response } from 'express';

class ItemController {
	static async index(req: Request, res: Response) {
		res
			.json({
				message: 'get items.',
			})
			.status(200);
	}

	static async show(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'get item.',
			})
			.status(200);
	}

	static async create(req: Request, res: Response) {
		res
			.json({
				message: 'create item.',
			})
			.status(200);
	}

	static async update(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'update item.',
			})
			.status(200);
	}

	static async destroy(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'delete item.',
			})
			.status(200);
	}
}

export default ItemController;
