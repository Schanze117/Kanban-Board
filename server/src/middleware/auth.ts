import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  //get authorization header
  const authHeader = req.headers.authorization;

  // check if the authorization header exists
  if (authHeader) {
    // extract the token from the header
    const token = authHeader.split(' ')[1];

    //get secret key from env
    const secretKey = process.env.JWT_SECRET_Key || ''
    if (!secretKey) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    // verify the token
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
        //attach user to request object
      req.user = user as JwtPayload;
    return next();
    });
  } 
  return res.sendStatus(401);
};
