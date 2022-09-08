import express, { Router } from 'express';
import IRoute from '../interface/IRoute';

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
		// Register all routes to class router
		this.router.post('/auth/register', (req, res) => {
			res.json({
				message: 'register.',
			});
		});

		this.router.post('/auth/login', (req, res) => {
			res.json({
				message: 'login.',
			});
		});

		this.router.post('/auth/logout', (req, res) => {
			res.json({
				message: 'logout.',
			});
		});

		this.router.patch('/user/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'update user.',
			});
		});

		this.router.delete('/user/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'delete user.',
			});
		});

		this.router.get('/list', (req, res) => {
			res.json({
				message: 'get lists.',
			});
		});

		this.router.get('/list/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'get list.',
			});
		});

		this.router.post('/list', (req, res) => {
			res.json({
				message: 'create list.',
			});
		});

		this.router.patch('/list/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'update list.',
			});
		});

		this.router.delete('/list/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'delete list.',
			});
		});

		this.router.get('/item', (req, res) => {
			res.json({
				message: 'get items.',
			});
		});

		this.router.get('/item/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'get item.',
			});
		});

		this.router.post('/item', (req, res) => {
			res.json({
				message: 'create item.',
			});
		});

		this.router.patch('/item/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'update item.',
			});
		});

		this.router.delete('/item/:id', (req, res) => {
			res.json({
				id: req.params.id,
				message: 'delete item.',
			});
		});
	}
}

export default new ApiRoutes();
