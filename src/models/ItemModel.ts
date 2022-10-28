import database from '../service/database';

const query: any = (): any => {
	return database('items');
};

export default { query };
