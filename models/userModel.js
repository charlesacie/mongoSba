const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    favoriteArtists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
});

module.exports = mongoose.model('User', userSchema);
