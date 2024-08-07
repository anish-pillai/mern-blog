import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required!'));
    //return res.status(400).json({ message: 'All the fields are required' });
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json('Signup Successful');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required!'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found!'));
    }
    const isPasswordValid = bcryptjs.compareSync(password, validUser.password);
    if (!isPasswordValid) {
      //Return this so the control does not pass to next
      return next(errorHandler(401, 'Invalid Credentials!'));
    }

    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET
      //   , {
      //   expiresIn: '1d',
      // }
    );

    const { password: userPassword, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
