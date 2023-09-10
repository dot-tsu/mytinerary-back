import { verifyToken } from '../jwt.js';

export function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized 😿' });
  }

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid token 😿' });
  }
}