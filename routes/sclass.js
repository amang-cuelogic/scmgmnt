/* GET users Teachers Listing. */
var teacherData = require("../schema/teacher").teacher;
var classData = require("../schema/classes").classes;

exports.assignclass = function(req, res){
	var teacher_id = req.body.teacher_id;
    var class_id = req.body.class_id;
    new teacherData({_id:3,teacher_id: teacher_id, class_id: class_id}).save(function(err,doc){console.log(doc);
    	if(err){
    		console.log(err);
    	}else{
    		res.send({msg : 'success'});
    	}
    })
    
	//return res.send({msg : 'success'});
};

exports.getteachers = function(req, res){
	teacherData.find({},function(err,data){
    	if(err){
    		console.log(err);
    	}else{
    		res.send(data);
    	}
	});
}
exports.getclasses = function(req, res){
	classData.find({},function(err,data){
    	if(err){
    		console.log(err);
    	}else{
    		res.send(data);
    	}
	});
}