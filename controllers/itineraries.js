import Itinerary from '../models/Itinerary.js'

export const getAllItineraries = async (req, res) => {
    try {
        const allItineraries = await Itinerary.find();
        res.json(allItineraries);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching itineraries 😿' });
    }
};

export const getItinerariesByPlace = async (req, res) => {
    try {
        const placeId = req.params.placeId; 
        const itinerariesInPlace = await Itinerary.find({ place: placeId });

        if (itinerariesInPlace.length === 0) {
            return res.status(404).json({ message: 'Itineraries not found for the given place 😿' });
        }

        res.json(itinerariesInPlace);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching itineraries by place 😿' });
    }
};

export const getItineraryById = async(req, res) => {
    try {
        const itinerary = await Itinerary.findOne({ _id: req.params.id });
        if(!itinerary) {
            return res.status(404).json({message: 'Itinerary not found 😿'});
        }
        res.json(itinerary);
    } catch (error) {
        res.status(500).json({error: 'Error fetching itinerary 😿'});
    }
}

export const createItinerary = async(req, res) => {
    try {
        const newItinerary = await Itinerary.create(req.body);
        res.status(201).json(newItinerary);
    } catch (error) {
        res.status(400).json({error: 'Error creating itinerary 😿'})
    }
};

export const updateItinerary = async(req, res) => {
    try{
        const updatedItinerary = await Itinerary.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true}
        );
        if (!updatedItinerary) {
            return res.status(404).json({message: 'Itinerary not found 😿'})
        }
        res.json(updatesItinerary);
    } catch (error) {
        res.status(400).json({error: 'Error updating itinerary 😿'})
    }
};

export const deleteItinerary = async(req, res) => {
    try{
        const deletedItinerary = await Itinerary.findOneAndDelete({_id: req.params.id});
        if (!deletedItinerary) {
            return res.status(404).json({message: 'Itinerary not found 😿'})
        }
        res.json(deletedItinerary);
    } catch (error) {
        res.status(500).json({error: 'Error deleting itinerary 😿'})
    }
};