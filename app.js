import 'dotenv/config.js';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes/places.js';

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO)
  .then(() => console.info('Database Connected 😺'))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/places', routes);

app.listen(PORT, () => console.info('Server running on port: ' + PORT));
