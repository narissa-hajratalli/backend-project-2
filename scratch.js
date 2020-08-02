const Provider = require('../models/providers.js');
const Comment = require('../models/comments.js');

//Refactor the current
const index = async (req, res) => {
    try {
      
      const allProviders = await Provider.find({});
      //Queries the provider model for all providers

      
      const providers = allProviders.map(async (provider) => { 
          //Map function is creating a new, modified array of providers with their comments

        const theComment = await Comment.findById(provider.comment);
        //Queries the Comment model for IDs

        console.log(theComment);

        return {
            _id: provider._id,
          lastName: comment.lastName,
          comment: theComment,
        };
      });

      console.log(providers);
      const providers2 = await Promise.all(providers);
      await res.status(200).json(providers2);
    } catch (error) {
      res.status(400).send(error);
    }
  };