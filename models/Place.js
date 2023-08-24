import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  image_url: String,
  description: String,
  isPopular: {
    type: Boolean,
    required: true
  }
});

const Place = mongoose.model('Place', placeSchema);

export default Place;
