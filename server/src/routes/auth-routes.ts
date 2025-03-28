import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  // Check if the user exists and the password is correct
  const {username, password} = req.body;
  const user = await User.findOne({ 
    where: { username } });
  if (!user) {
    return res.status(404).json({ message: 'User Not Found' });
  }
  // Check if the password is correct
  const passwordisValid = await bcrypt.compare(password, user.password);
  if (!passwordisValid) {
    return res.status(401).json({ message: 'Invalid password' });
  }

const secretKey = process.env.JWT_SECRET_KEY || '';

  // Create a JWT token
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h'});
  return res.status(200).json({ 
    message: 'Login successful',
    token: token });
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
