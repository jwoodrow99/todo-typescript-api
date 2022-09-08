import { Router } from 'express';

interface IRoute {
	baseDir: string;
	router: Router;
}

export default IRoute;
