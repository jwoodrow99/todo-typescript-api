import express, { Router } from 'express';
import IRoute from '../interface/IRoute';

// Controllers
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import ListController from '../controllers/ListController';
import ItemController from '../controllers/ItemController';

// Middleware
import AuthenticationMiddleware from '../middleware/AuthenticationMiddleware';

class ApiRoutes implements IRoute {
	public baseDir: string;
	public router: Router;

	constructor() {
		// define base route and express router
		this.baseDir = '/api';
		this.router = express.Router();

		// Register private register routes function
		this.registerRoutes();
	}

	private registerRoutes(): void {
		// Auth routes
		this.router.post('/auth/register', AuthController.register);
		this.router.post('/auth/login', AuthController.login);
		this.router.post('/auth/logout', AuthController.logout);

		// User routes
		this.router.patch(
			'/user/:user_id',
			AuthenticationMiddleware,
			UserController.update
		);
		this.router.delete(
			'/user/:user_id',
			AuthenticationMiddleware,
			UserController.delete
		);

		// List routes
		this.router.get('/list', AuthenticationMiddleware, ListController.index);
		this.router.get(
			'/list/:list_id',
			AuthenticationMiddleware,
			ListController.show
		);
		this.router.post('/list', AuthenticationMiddleware, ListController.create);
		this.router.patch(
			'/list/:list_id',
			AuthenticationMiddleware,
			ListController.update
		);
		this.router.delete(
			'/list/:list_id',
			AuthenticationMiddleware,
			ListController.destroy
		);

		// Item routes
		this.router.get(
			'/list/:list_id/item',
			AuthenticationMiddleware,
			ItemController.index
		);
		this.router.get(
			'/list/:list_id/item/:item_id',
			AuthenticationMiddleware,
			ItemController.show
		);
		this.router.post(
			'/list/:list_id/item',
			AuthenticationMiddleware,
			ItemController.create
		);
		this.router.patch(
			'/list/:list_id/item/:item_id',
			AuthenticationMiddleware,
			ItemController.update
		);
		this.router.delete(
			'/list/:list_id/item/:item_id',
			AuthenticationMiddleware,
			ItemController.destroy
		);
	}
}

export default new ApiRoutes();
