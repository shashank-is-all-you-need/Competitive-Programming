const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserModel = new Schema({
	userName:{type:String},
	password:{type:String}
})

UserModel.set('toJson',{virtuals:true});

module.exports = mongoose.model('user',UserModel);