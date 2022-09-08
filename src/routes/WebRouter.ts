import express, { Router } from 'express';
import IRoute from '../interface/IRoute';

class ApiRoutes implements IRoute {
	public baseDir: string;
	public router: Router;

	constructor() {
		// define base route and express router
		this.baseDir = '/';
		this.router = express.Router();

		// Register private register routes function
		this.registerRoutes();
	}

	private registerRoutes(): void {
		// Register all routes to class router
	}
}

export default new ApiRoutes();
