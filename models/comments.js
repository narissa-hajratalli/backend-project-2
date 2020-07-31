const mongoose = require('mongoose');
const { Schema, models } = mongoose;

const commentSchema = new Schema ({
    comment: String
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)

