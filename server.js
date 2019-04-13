// Base Setup

//call the packages we need

var express = require('express'); //call express
var app = express(); //define our app using express
var bodyParser = require('body-parser');

//configure app to use body parser
//this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set our port


//Routes for our API

//===========================================

var router = express.Router();       //get an instance of the router


//middleware to use for all requests
router.use(function(req,res,next){
    console.log('Something is happening.');
    next();
});


//test route to make sure everything is working(accessed at GET http://localhost:8080/api)
router.get('/', function(req,res){
    res.json({message: 'Welcome'});
});


//more routes for our API will happen here

//on routes that end in /bears
//=======================================================

router.route('/bears')

//create a bear (accessed at POST http://localhost:8080/api/bears)

.post(function(req,res){
    var bear = new Bear(); //create new instance of bear model
    bear.name = req.body.name; //set the bears name(comes from the request)

    //save the bear and check for errors
    bear.save(function(err){
        if(err)
            res.send(err);
            res.json({message: ' Bear Created'});
    });

})




//Register our Routes ----------------------------------------- 
//all of our routers will be prefixed with  /api
app.use('/api', router);

//START THE SERVER
app.listen(port);
console.log('Magic Happens on port ' + port);


//BASE SETUP

// ============================================

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:<password>@cluster0-45nfb.mongodb.net/test')

var Bear = require('./app/models/bear');

 
















/*
//MongoDB
//==================================================
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'Restful API';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
}); 
*/
