import express from 'express';
import { getAllItineraries, getItineraryByCity, getItineraryById, createItinerary, updateItinerary, deleteItinerary } from '../controllers/itineraries.js';

const router = express.Router();

router.get('/', getAllItineraries);
router.get('/city/:city', getItineraryByCity); 
router.get('/:id', getItineraryById);
router.post('/', createItinerary);
router.put('/:id', updateItinerary);
router.delete('/:id', deleteItinerary);

export default router;