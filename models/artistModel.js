const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    albums: { type: [String], required: true },
    popularity: { type: Number, min: 0, max: 100 },
    hometown: String,
});

module.exports = mongoose.model('Artist', artistSchema);

