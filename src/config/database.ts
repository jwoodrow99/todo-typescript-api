import { Knex, knex } from 'knex';
import path from 'path';

const sqlite3: Knex.Sqlite3ConnectionConfig = {
	filename: path.join(__dirname, '..', '..', 'DB.sqlite'),
};

const mysql: Knex.MySqlConnectionConfig = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'typescript-todo',
};

export default {
	sqlite3,
	mysql,
};
