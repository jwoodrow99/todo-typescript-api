import { Knex, knex } from 'knex';
import databaseConfig from '../config/database';

let connectionConfig: Knex.Config = {
	client: process.env.DB_CLIENT || 'sqlite3',
	useNullAsDefault: true,
	connection: databaseConfig.sqlite3,
};

export default knex(connectionConfig);
