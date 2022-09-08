import dotenv from 'dotenv';
dotenv.config();

import forEachAsync from '../utility/forEachAsync';

import UsersMigration from '../migrations/UsersMigration';
import ListsMigration from '../migrations/ListsMigration';
import ItemsMigration from '../migrations/ItemsMigration';

const registeredMigrations = [UsersMigration, ListsMigration, ItemsMigration];

forEachAsync(registeredMigrations, async (migration: any) => {
	await migration.down();
	await migration.up();
});

console.log('Migrations completed!');
