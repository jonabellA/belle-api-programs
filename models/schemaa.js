const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    program: String,
    year: String,
    code: String,
    description: String,
    units: Number,
    tags: [String]
} );

module.exports = mongoose.model('Course', courseSchema);
