var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = Schema ({
	_id: Number,
	name: String,
	username :String,
	password:String,
	usertype: Number,
	enabled: Number,
	school_id: Number	
});
exports.user = mongoose.model('users', userSchema);