const config = require('./config');
const mongoose = require('mongoose');

const url = 'mongodb://' + config.dbHost + ':' + config.dbPort + '/' + config.db;

mongoose.connect(url,(err, db)=>{
	if (!err) {
		console.log("connected to the database....");
	} else {
		console.log("error in connecting to the db")
	}
})

module.exports = {
    User: require('./models/User')
};