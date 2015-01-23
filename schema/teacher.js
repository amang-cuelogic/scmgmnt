var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacherSchema = Schema ({
	_id: Number,
	teacher_id: Number,
	class_id :Number,
	school_id : Number
});

exports.teacher = mongoose.model('teachers', teacherSchema);