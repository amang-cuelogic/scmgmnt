/* GET users Teachers Listing. */
var userData = require("../schema/users").user;
var teacherData = require("../schema/teacher").teacher;
var classData = require("../schema/classes").classes;
var bookData = require("../schema/books").books;

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

exports.addclass = function(req, res){
    var classname = req.body.class_name;
    classData.findOne({},{},{ sort: { '_id' : -1 } },function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data._id + 1);
            new classData({_id: data._id + 1, class_name: classname}).save(function(err,result){
                if(err){
                    console.log(err);
                }else{
                    res.send({msg : 'success'});
                }
            });
        }
    });
    
};
exports.addbook = function(req, res){
    var bookname = req.body.book_name;
    bookData.findOne({},{},{ sort: { '_id' : -1 } },function(err,data){
        if(err){
            console.log(err);
        }else{
            if(data==null){
               new bookData({_id:  1, book_name: bookname}).save(function(err,result){
                    if(err){
                        console.log(err);
                    }else{
                        res.send({msg : 'success'});
                    }
                });
            }else{
                new bookData({_id: data._id + 1, book_name: bookname}).save(function(err,result){
                    if(err){
                        console.log(err);
                    }else{
                        res.send({msg : 'success'});
                    }
                });
            }
            
        }
    });  
};

exports.listclass = function(req, res){
    classData.find({},function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    });
};

exports.listbooks = function(req, res){
    bookData.find({},function(err,data){
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    });
};

exports.viewclasses = function(req, res){
    var currUsername = JSON.parse(req.cookies.globals).currentUser.username;
    userData.findOne({username : currUsername},function(err,currUsertype){
        if(err){
            console.log(err);
        }else{
            if(currUsertype.usertype == 1){
                teacherData.find({},function(err,resdata){
                    if(err){
                        console.log(err);
                    }else{
                        var userdetails = new Array();
                        for(var k in resdata){
                            //console.log(resdata[k].teacher_id);

                            userData.find({_id : resdata[k].teacher_id},function(err,tname){
                                userinfo = tname;
                                classData.find({_id : resdata[k].class_id},function(err,cname){console.log()
                                    //userinfo.classinfo = cname;
                                    //return userdetails[k] = {'userinfo':userinfo,'classinfo':cinfo};
                                    

                                });

                            });
                        }
                        
                    }
                });
            }else if(currUsertype.usertype == 2){
                teacherData.find({school_id : currUsertype.schoolid},function(err,resdata){
                    if(err){
                        console.log(err);
                    }else{
                        res.send(resdata);
                    }
                });
            }else if(currUsertype.usertype == 3){
                teacherData.find({teacher_id : currUsertype._id},function(err,resdata){
                    if(err){
                        console.log(err);
                    }else{
                        res.send(resdata);
                    }
                });
            }
        }   
    });
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