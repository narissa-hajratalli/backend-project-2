const Comment = require('../models/providers.js');

//CREATE - create a new comment
const create = async (req, res) => {
    try {
        const createComment= await Comment.create(req.body)
        res.status(200).json(createComment) 
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