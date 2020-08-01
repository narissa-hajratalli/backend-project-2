const db = require('../db/index.js')
const Provider = require('../models/providers.js')
const Comment = require('../models/comments.js') 

// define comments to seed (with references to a provider already in the system
const commentSeed = [
  {
    providerLastName: "Hajratalli",
    comment: "Is the best"
  },
  
]

// add the record seed array with necessary awaits
const addComment = async () => {
  
    await Promise.all(commentSeed.map(async commentToAdd => {
    //This waits until all the promises in this are handled
    //commentToAdd is the parameter for this map function

    let provider = await Provider.findOne({providerLastName: commentToAdd.lastName})
    //Finds all the providers in the documents with matching names
    //This tells us to look up the provider in the artist model

    commentToAdd.provider = provider._id
    //Update object with provider ID
    //Links you to the ID for the that provider specifically

    const comment = await Comment.create(commentToAdd)
    //Create a comment in the database
    console.log(comment)

    await provider.comments.push(comment._id) //looking at comments
    await provider.save()
    console.log(provider)
    }))
    //Everytime you use a mongoDB function it takes some time to query so await is necessary to have some time to query 

  db.close()

}

addComment() // invoke the async function