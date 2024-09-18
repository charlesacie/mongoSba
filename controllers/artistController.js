const Artist = require('../models/artistModel');

exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createArtist = async (req, res) => {
    try {
        const newArtist = new Artist(req.body);
        await newArtist.save();
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateArtist = async (req, res) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedArtist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteArtist = async (req, res) => {
    try {
        await Artist.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
