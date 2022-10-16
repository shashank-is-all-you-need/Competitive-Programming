const db = require('../db.js');
const User = db.User;

async function addTraveller(params) {
	// body...
	console.log("params in addTraveller",params)
	const user = new User(params);

	await user.save();
}


module.exports = {
	addTraveller
}