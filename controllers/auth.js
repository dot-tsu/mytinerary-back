import User from '../models/User.js';
import { generateToken } from '../jwt.js'; 
import Joi from 'joi';

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Email not registered 😿' });
    }

    const isMatch = await user.comparePassword(password);

    if (isMatch) {
      const token = generateToken(user);
      return res.status(200).json({ message: 'Successful login 😼', token });
    } else {
      return res.status(401).json({ message: 'Incorrect Password 😿' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong 😿' });
  }
}

export async function createUser(req, res) {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        country: Joi.string().required(),
      });
  
      const { error } = schema.validate(req.body);
  
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
  
      const existingUser = await User.findOne({ email: req.body.email });
  
      if (existingUser) {
        return res.status(409).json({ error: 'That email has already been registered 😿' });
      }
  
      const newUser = new User(req.body);
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  