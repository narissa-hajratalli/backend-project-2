const Comment = require('../models/providers.js');
const Provider = require('../models/providers.js');

//CREATE - create a new comment
const create = async (req, res) => {
    try {
        // const createComment= await Comment.create(req.body)
        // res.status(200).json(createComment) 

        //This queries for the provider's entry in the collection
        const currentProvider = await Provider.findById({}); 

        //This waits for the user to input their comment and it is added to the bodu of the request
        const newComment = await Comment.create(req.body);

        //This pushes the new comment into the "comments" property in the provider schema
        currentProvider.comments.push(newComment._id);

        //This saves the comment to that provider
        await currentProvider.save();

        res.status(200).json(newComment) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

//DESTROY - delete individual comments
const destroy = async (req, res) => {
    try {
        const deleteComment = await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteComment) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports = {
    create,
    destroy
}