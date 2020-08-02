const Comment = require('../models/comments.js');
const Provider = require('../models/providers.js');

//CREATE - create a new comment
const create = async (req, res) => {
    try {
        // const createComment= await Comment.create(req.body)
        // res.status(200).json(createComment) 

        //This waits for the user to input their comment and it is added to the body of the request
        const newComment = await Comment.create(req.body);

        //This queries for the provider's entry in the collection
        let currentProvider = await Provider.findOne({_id: newComment.providerId}); 

        //This pushes the new comment into the "comments" property in the provider schema
        await currentProvider.comments.push(newComment._id);

        //This saves the comment to that provider
        await currentProvider.save();

        res.status(200).json(newComment) 
    }
    catch(error){
        res.status(400).send(error)
    }
}

//READ - show all comments, using for testing purposes
const index = async (req, res) => {
    try {
        const allComment = await Comment.find({})
        res.status(200).json(allComment)
    }
    catch(error) {
    }
}

//DESTROY - delete individual comments
const destroy = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        //finds the comment by ID and deletes it from the db and returns to us the deleted ID 
        res.status(200).json(deletedComment);
    }
    catch(error) {
        res.status(400).send(error)
    } 
}

module.exports = {
    index,
    create,
    destroy
}