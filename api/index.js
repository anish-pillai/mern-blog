import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import auth from './routes/auth.route.js';

dotenv.config();
const mongoDB = process.env.MONGO_URI;

mongoose
  .connect(mongoDB)
  .then(() => console.log('Mongo DB is connected'))
  .catch((err) => console.log('Mondo DB connection failed! ', err));

const app = express();
app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
app.use('/api/user', userRouter);
app.use('/api/auth', auth);

// Add an error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: errorMessage,
  });
});
