import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IRequest from '../interface/IRequest';

const AuthenticationMiddleware = (
	req: IRequest,
	res: Response,
	next: NextFunction
) => {
	if (req.header('authorization')) {
		try {
			req.user = jwt.verify(
				req.header('authorization')?.split(' ')[1] || '',
				process.env.TOKEN || ''
			);
			next();
		} catch (err) {
			res
				.json({
					message: 'Unauthenticated.',
				})
				.status(401);
		}
	} else {
		res
			.json({
				message: 'Unauthenticated.',
			})
			.status(401);
	}
};

export default AuthenticationMiddleware;
