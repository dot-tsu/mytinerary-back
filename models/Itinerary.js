import mongoose from 'mongoose';

const itinerarySchema = new mongoose.Schema({
  name: String,
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
  comments: [String],
  hashtags: [String]
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

export default Itinerary;