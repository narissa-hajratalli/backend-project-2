const Provider = require('../models/providers.js');

//CREATE - add a new provider
const create = async (req, res) => {
    try { 
        const createProviders = await Provider.create(req.body);
        //We are adding the request, aka the new provider, to the "body" of the request

        //const allProviders = await Provider.find({});
        //This queries for all the providers after the new one is added

        res.status(200).json(createProviders) 
        //This returns the updated list to JSON data
    }
    catch(error) {
        res.status(400).send(error)
        //res.status() is telling the user that our response is an error message if the function fails. We are choosing which error message to show.
    }
}

// READ - list all providers
const index = async (req, res) => {
    try {
        const allProviders = await Provider.find({}).populate('comments'); 
        //This queries for all the providers, waits until the query is over
        
        res.status(200).json(allProviders);
        //This stores the queried data as a variable, and returns it as JSON data
    } 
    catch(error) {
        res.status(400).send(error);
    }
}

//UPDATE - update provider information
const update = async (req, res) => {
    try {
        const updateProvider = await Provider.findOneAndUpdate(req.params.id, req.body, {new: true});
        //Finds the provider by its ID in our Mongo database
        //The URL params will contain the ID of the provider we want to select

        res.status(200).json(updateProvider)
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports = {
    index,
    create,
    update
}