import database from '../service/database';

const query: any = (): any => {
	return database('users');
};

export default { query };
