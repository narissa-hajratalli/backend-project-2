const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema ({
    // providerid:[{
    //         type: Schema.Types.ObjectId,
    //         ref: "providers"
    //     }],
    comment: { type: String, required: true },
    commenterName: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)