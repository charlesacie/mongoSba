const Album = require('../models/albumModel');

exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('artistId', 'name');
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAlbum = async (req, res) => {
    try {
        const newAlbum = new Album(req.body);
        await newAlbum.save();
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAlbum = async (req, res) => {
    try {
        const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAlbum);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteAlbum = async (req, res) => {
    try {
        await Album.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
