import express from 'express';
import { getAllItineraries, getItinerariesByPlace, getItineraryById, createItinerary, updateItinerary, deleteItinerary } from '../controllers/itineraries.js';

const router = express.Router();

router.get('/', getAllItineraries);
router.get('/place/:placeId', getItinerariesByPlace); 
router.get('/:id', getItineraryById);
router.post('/', createItinerary);
router.put('/:id', updateItinerary);
router.delete('/:id', deleteItinerary);

export default router;