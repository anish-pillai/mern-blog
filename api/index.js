import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoDB = process.env.MONGO_URI;

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongo DB is connected'))
  .catch((err) => console.log('Mondo DB connection failed! ', err));

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
