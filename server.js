/////////////////
//DEPENDENCIES
/////////////////
require("dotenv").config();
const express = require("express"); //bringing in the express library
const app = express();
// const mongoose = require("./db"); //Importing Connection
const cors = require("cors");
const morgan = require('morgan');
const mongoose = require("mongoose");

/////////////////
//GLOBAL VARIABLES
/////////////////
const PORT = process.env.PORT; //port number for server as defined in environment variables
const NODE_ENV = process.env.NODE_ENV; //"development" or "production"
const mongoURI = process.env.mongoURI + "test1"; //URI for connecting to database specified in .env
// const db = mongoose.connection; //the mongoose connection object
const mongoConfigObject = { useNewUrlParser: true, useUnifiedTopology: true }; //Config option to eliminate deprecation warnings


///////////////////////////
//CONNECT TO DATABASE
///////////////////////////
// Code for connecting to our mongo database
mongoose.connect(mongoURI, mongoConfigObject, () => {
    console.log("CONNECTED TO MONGO");
  });
  

/////////////////////
// CORS SECURITY CONFIGURATIONS
/////////////////////
const whitelist = [
    "http://localhost:3000/",
    "http://localhost:3000",
  ];
  const corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header("Origin")) !== -1) {
      corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
  };

/////////////////////
// MIDDLEWARE
////////////////////
//UTILITY FUNCTIONS THAT RUN BEFORE YOUR ROUTES
NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions)); //ternary operator
// Enables websites in whitelist to make API calls to your server, enables all sites in development
app.use(express.json()); //When you send JSON data to your API, this interprets the JSON data and looks in the body of your request. Parses data and uses it in your body 
app.use(morgan("dev")); // Enables Morgan logging, creating more useful terminal logs while server runs
app.use(express.static("public")); //Allows static serving of files from public folder

/////////////////
//ROUTES (move to the routes folder later)
/////////////////

///////////////////////////
//ROOT ROUTE (FOR TESTING)
///////////////////////////
app.get("/", (req, res) => {
    res.send("If you see this then the server is working!");
});

/////////////////
//LISTENER
/////////////////
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})