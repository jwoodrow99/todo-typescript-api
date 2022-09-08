import express, { Router } from 'express';
import IRoute from '../interface/IRoute';

// Controllers
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
import ListController from '../controllers/ListController';
import ItemController from '../controllers/ItemController';

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
		this.router.patch('/user/:id', UserController.update);
		this.router.delete('/user/:id', UserController.delete);

		// List routes
		this.router.get('/list', ListController.index);
		this.router.get('/list/:id', ListController.show);
		this.router.post('/list', ListController.create);
		this.router.patch('/list/:id', ListController.update);
		this.router.delete('/list/:id', ListController.destroy);

		// Item routes
		this.router.get('/item', ItemController.index);
		this.router.get('/item/:id', ItemController.show);
		this.router.post('/item', ItemController.create);
		this.router.patch('/item/:id', ItemController.update);
		this.router.delete('/item/:id', ItemController.destroy);
	}
}

export default new ApiRoutes();
