import 'dotenv/config.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session'; 

import placeRoutes from './routes/places.js';
import itineraryRoutes from './routes/itineraries.js'; 
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js'

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO)
  .then(() => console.info('Database Connected 😺'))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/places', placeRoutes);
app.use('/api/itineraries', itineraryRoutes); 
app.use('/api/users', userRoutes);
app.use('/auth/', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong 😿' });
});


app.listen(PORT, () => console.info('Server running on port: ' + PORT + ' 😼'));