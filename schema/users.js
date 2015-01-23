var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = Schema ({
	_id: Number,
	name: String,
	username :String,
	password:String,
	usertype: String,
	schoolid: String,
	bookid: String
});

exports.user = mongoose.model('users', userSchema);