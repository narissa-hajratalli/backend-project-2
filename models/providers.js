const mongoose = require('mongoose'); //require brinds in all functions that lives in the Mongoose object
const { Schema, model } = mongoose; //destructuring allows us to only pull out certain functions & classes that we need

const providerSchema = new Schema({
    picture: { type: String }, // This will be a url to display the provider's picture; it will be optional
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    providerType: { type: String, required: true },
    specialty: { type: String, required: true },
    acceptsMedicaid: { type: Boolean },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment" 
    }]
}, { timestamps: true } )


module.exports = mongoose.model('Provider', providerSchema) 
//Keep the model name capital and singular
//In Mongo, the collection will become lowercase and plural--in this case 'providers'



