import Migration from './Migration';
import database from '../service/database';

class UsersMigration extends Migration {
	constructor() {
		super('users');
	}

	public async up() {
		await database.schema.createTable(this.tableName, function (table) {
			table.increments('id').primary();
			table.string('name');
			table.string('email').unique();
			table.string('password');
			table.timestamps(false, true);
		});
		console.log(`${this.tableName} table created!`);
	}
}

export default new UsersMigration();
