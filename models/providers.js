const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const providerSchema = new Schema({
    picture: {type: String }, //this will be a url
    firstName: {type: String },
    lastName: { type: String, required: true },
    providerType: { type: String, required: true },
    specialty: { type: String, required: true },
    acceptsMedicaid: {type: Boolean },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment' 
    }]
}, { timestamps: true } )

module.exports = mongoose.model('Provider', providerSchema)