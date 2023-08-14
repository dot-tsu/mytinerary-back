import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  city: String,
  country: String,
  image_url: String,
  description: String,
  isPopular: Boolean
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
