const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
    releaseDate: Date,
    tracks: { type: Number, min: 1 },
});

module.exports = mongoose.model('Album', albumSchema);
