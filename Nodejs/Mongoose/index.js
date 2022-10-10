const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Joi = require('joi');
const TravellersRoute = require('./Routes/travellers');

const app = express();

const CONFIGURATIONS = {
	port: 8080,
	dbHost: '0.0.0.0',
  	dbPort: 27017,
  	db: 'BookStore',
}

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended:true
}));

app.use("/travellers",TravellersRoute);

const url = 'mongodb://' + CONFIGURATIONS.dbHost + ':' + CONFIGURATIONS.dbPort + '/' + CONFIGURATIONS.db;

mongoose.connect(url, function (err, database) {
	if (err) {
		console.log("error in connecting to the database",err)
	} else {
		console.log("DB connection established......")
	}
});

app.listen(CONFIGURATIONS.port, (err, res) =>{
	if (!err) {
		console.log("Server started at port",CONFIGURATIONS.port);
	} else {
		console.log("error in starting the server");
	}
})