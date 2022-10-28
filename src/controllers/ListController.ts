import { Request, Response } from 'express';
import IRequest from '../interface/IRequest';

class ListController {
	static async index(req: IRequest, res: Response) {
		res
			.json({
				message: 'get lists.',
			})
			.status(200);
	}

	static async show(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'get list.',
			})
			.status(200);
	}

	static async create(req: IRequest, res: Response) {
		res
			.json({
				message: 'create list.',
			})
			.status(200);
	}

	static async update(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'update list.',
			})
			.status(200);
	}

	static async destroy(req: IRequest, res: Response) {
		res
			.json({
				id: req.params.id,
				message: 'delete list.',
			})
			.status(200);
	}
}

export default ListController;
