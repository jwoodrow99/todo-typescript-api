import dotenv from 'dotenv';
dotenv.config();

import Server from './server';

const server = new Server();
server.boot(() => {
	console.log('Post Boot!');
});
