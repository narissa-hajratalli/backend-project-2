const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema ({
    comment: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)