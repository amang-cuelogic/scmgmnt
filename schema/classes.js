var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var classesSchema = Schema ({
	_id: String,
	class_id: String,
	class_name :String
});
exports.classes = mongoose.model('classes', classesSchema);