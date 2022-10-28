import database from '../service/database';

const query: any = (): any => {
	return database('lists');
};

export default { query };
