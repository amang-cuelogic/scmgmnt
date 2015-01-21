/* GET users Teachers Listing. */
var userData = require("../schema/users").user;
var teacherData = require("../schema/teacher").teacher;
var classData = require("../schema/classes").classes;

exports.assignclass = function(req, res){
	var teacher_id = req.body.teacher_id;
    var class_id = req.body.class_id;
    new teacherData({_id:3,teacher_id: teacher_id, class_id: class_id}).save(function(err,doc){
    	if(err){
    		console.log(err);
    	}else{
    		res.send({msg : 'success'});
    	}
    })
};

exports.viewclasses = function(req, res){
    var currUsername = JSON.parse(req.cookies.globals).currentUser.username;
    var currUsertype = JSON.parse(req.cookies.globals).currentUser.usertype;
    if(currUsertype=='superadmin'){
        teacherData.find({teacher_id : data._id},function(err,resdata){
            if(err){
                console.log(err);
            }else{
                res.send(resdata);
            }
        });
    }else if(currUsertype=='admin'){
        userData.findOne({username : currUsername},function(err,data){
            if(err){
                console.log(err);
            }else{
                if(data.usertype!='teacher'){
                    res.send('No Data Found');
                }else{
                    teacherData.find({admin_id : data._id},function(err,resdata){
                        if(err){
                            console.log(err);
                        }else{
                            res.send(resdata);
                        }
                    });
                }
            }
        });
    }else{
        userData.findOne({username : currUsername},function(err,data){
            if(err){
                console.log(err);
            }else{
                if(data.usertype!='teacher'){
                    res.send('No Data Found');
                }else{
                    teacherData.find({teacher_id : data._id},function(err,resdata){
                        if(err){
                            console.log(err);
                        }else{
                            res.send(resdata);
                        }
                    });
                }
            }
        });
    }
};

exports.getteachers = function(req, res){
    userData.find({usertype : 'teacher'},function(err,data){
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