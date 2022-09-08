import Migration from './Migration';
import database from '../service/database';

class ItemsMigration extends Migration {
	constructor() {
		super('items');
	}

	public async up() {
		await database.schema.createTable(this.tableName, function (table) {
			table.increments('id').primary();
			table
				.integer('list_id')
				.unsigned()
				.index()
				.references('id')
				.inTable('lists');
			table.string('title');
			table.boolean('done');
			table.timestamps(false, true);
		});
		console.log(`${this.tableName} table created!`);
	}
}

export default new ItemsMigration();
