import database from '../service/database';

class Migration {
	protected tableName: string;

	constructor(tableName: string) {
		this.tableName = tableName;
	}

	public async down() {
		await database.schema.dropTableIfExists(this.tableName);
		console.log(`${this.tableName} table deleted!`);
	}
}

export default Migration;
