const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    videoId: String
});

mongoose.model('collects', userSchema);