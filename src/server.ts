import express, { Application } from 'express';
import cors from 'cors';
import address from 'address';

// Import routers
import WebRouter from './routes/WebRouter';
import ApiRouter from './routes/ApiRouter';

// Import config files
import expressConfig from './config/express';
import corsConfig from './config/cors';

class Server {
	private server: Application;
	private port: Number;

	constructor() {
		this.server = express();
		this.port = Number(process.env.PORT || 3000);

		this.registerGlobalMiddleware();
		this.registerRoutes();
	}

	private registerGlobalMiddleware(): void {
		this.server.use(express.json(expressConfig.json));
		this.server.use(express.urlencoded(expressConfig.urlencoded));
		this.server.use(cors(corsConfig));
	}

	private registerRoutes(): void {
		this.server.use(WebRouter.baseDir, WebRouter.router);
		this.server.use(ApiRouter.baseDir, ApiRouter.router);
	}

	public boot(postBoot?: Function): void {
		this.server.listen(this.port, () => {
			console.log(`Server started on port ${this.port}`);
			console.log(
				`Available on your local network at ${address.ip()}:${this.port}`
			);

			postBoot ? postBoot() : false;
		});
	}
}

export default Server;
