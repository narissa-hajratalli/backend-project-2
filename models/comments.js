const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema ({
    // providerid:[{
    //         type: Schema.Types.ObjectId,
    //         ref: "providers"
    //     }],
    //commenting out, I don't think I need to have them reference each other right now
    
    comment: { type: String, required: true },
    // comment: [{
    //     type: Schema.Types.ObjectId, 
    //     ref: "comments"
    // }],
    commenterName: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)