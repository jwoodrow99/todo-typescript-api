import { Request, Response } from 'express';

class ListController {
	static async index(req: Request, res: Response) {
		res
			.json({
				message: 'get lists.',
			})
			.status(200);
	}

	static async show(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'get list.',
			})
			.status(200);
	}

	static async create(req: Request, res: Response) {
		res
			.json({
				message: 'create list.',
			})
			.status(200);
	}

	static async update(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'update list.',
			})
			.status(200);
	}

	static async destroy(req: Request, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'delete list.',
			})
			.status(200);
	}
}

export default ListController;
