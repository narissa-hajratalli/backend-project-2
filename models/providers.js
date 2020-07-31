const mongoose = require('mongoose');
const { Schema, models } = mongoose;

const providerSchema = new Schema({
    picture: String, //this will be a url
    firstName: String,
    lastName: String,
    providerType: String,
    specialty: String,
    acceptsMedicaid: Boolean,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment' 
    }]
}, { timestamps: true } )

module.exports = mongoose.model('Provider', providerSchema)