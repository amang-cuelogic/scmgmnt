var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacherSchema = Schema ({
	_id: String,
	teacher_id: String,
	class_id :String
});
exports.teacher = mongoose.model('teachers', teacherSchema);