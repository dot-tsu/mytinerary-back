import mongoose from 'mongoose';

const itinerarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    name: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      required: true
    }
  },
  price: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  likes: {
    type: Number,
    default: 0,
    required: true
  },
  comments: [String],
  hashtags: [String],
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place', 
    required: true
  }
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

export default Itinerary;