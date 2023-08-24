import mongoose from 'mongoose';

const itinerarySchema = new mongoose.Schema({
  user: {
    name: String,
    profilePicture: String 
  },
  price: {
    type: Number,
    min: 1,
    max: 5
  },
  duration: Number,
  likes: {
    type: Number,
    default: 0
  },
  hashtags: [String]
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

export default Itinerary;