const db = require('../db')
const Provider = require('../models/providers.js')

// define providers to a seed
const providerSeed = new Schema({
    picture: "url",
    firstName: "Narissa",
    lastName: "Hajratalli",
    providerType: "MD",
    specialty: "Neurology",
    acceptsMedicaid: true,
}, { timestamps: true } )

// insert all artists from array
Provider.insertMany(providerSeed,
  (error, response) => {
      if (error) {
          console.log(error);
      } else {
          console.log(response);
      }
      db.close()
  })