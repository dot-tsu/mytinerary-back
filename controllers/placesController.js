import Place from '../models/Place.js';

export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching places 😿' });
  }
};

export const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findOne({ _id: req.params.id });
    if (!place) {
      return res.status(404).json({ message: 'Place not found 😿' });
    }
    res.json(place);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching place 😿' });
  }
};

export const createPlace = async (req, res) => {
    try {
      const newPlace = await Place.create(req.body);
      res.status(201).json(newPlace);
    } catch (error) {
      res.status(400).json({ error: 'Error creating place' });
    }
  };

  export const updatePlace = async (req, res) => {
    try {
      const updatedPlace = await Place.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!updatedPlace) {
        return res.status(404).json({ message: 'Place not found' });
      }
      res.json(updatedPlace);
    } catch (error) {
      res.status(400).json({ error: 'Error updating place' });
    }
  };

  export const deletePlace = async (req, res) => {
    try {
      const deletedPlace = await Place.findOneAndDelete({ _id: req.params.id });
      if (!deletedPlace) {
        return res.status(404).json({ message: 'Place not found' });
      }
      res.json(deletedPlace);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting place' });
    }
  };