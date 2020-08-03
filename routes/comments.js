const express = require('express');
const CommentRouter = express.Router();
const { index, create, destroy } = require('../controllers/comments.js')


//CREATE - create a new comment
CommentRouter.post('/', create);

//READ - show all comments
CommentRouter.get('/', index);

//DELETE - delete comment
CommentRouter.delete('/:commentid', destroy);

module.exports = CommentRouter;