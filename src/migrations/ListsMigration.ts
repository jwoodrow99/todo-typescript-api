import Migration from './Migration';
import database from '../service/database';

class ListsMigration extends Migration {
	constructor() {
		super('lists');
	}

	public async up() {
		await database.schema.createTable(this.tableName, function (table) {
			table.increments('id').primary();
			table
				.integer('user_id')
				.unsigned()
				.index()
				.references('id')
				.inTable('users');
			table.string('title');
			table.string('description');
			table.timestamps(false, true);
		});
		console.log(`${this.tableName} table created!`);
	}
}

export default new ListsMigration();
