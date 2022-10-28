import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IRequest from '../interface/IRequest';

const AuthenticationMiddleware = (
	req: IRequest,
	res: Response,
	next: NextFunction
) => {
	req.user = jwt.verify(
		req.header('authorization')?.split(' ')[1] || '',
		process.env.TOKEN || ''
	);
	next();
};

export default AuthenticationMiddleware;
