const express = require('express');
const CommentRouter = express.Router();
const { create, destroy } = require('../controllers/comments.js')

//READ - shows all providers
CommentRouter.post('/', create);

//UPDATE - update provider information
CommentRouter.delete('/:providerid', destroy);

module.exports = CommentRouter;