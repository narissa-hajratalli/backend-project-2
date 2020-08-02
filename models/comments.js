const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema ({
    providerLastName: { type: String, required: true },
    comment: { type: String, required: true },
    commenterName: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)