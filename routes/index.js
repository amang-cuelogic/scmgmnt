/* GET home page. */
var userData = require("../schema/users").user;

exports.index = function(req, res){
  res.render('index', { title: 'School Management - Home' });
};
exports.login = function(req, res){
  //res.render('layout', { title: 'School Management Login' });
    var username = req.body.username;
    var password = req.body.password;
	if (username == '' || password == '') {
	    return res.send(401,'Enter the correct username and password');
	}

	userData.findOne({'username' : username}, function(err, user){
	    if (err) {
	        console.log(err);
	        return res.send(401,'Enter the correct username and password');
	    }else{
	    	//console.log(user)
	    	//console.log(user[0].username)	    	
	    	if (user==null){
		    	return res.send({error : 'error'});
			}else{
				if (username === user.username && password === user.password) {
					return res.send(user);
				}else{
					return res.send({error : 'error'});
				} 
			}
	    }
	});
};

function GenerateCookie() {
	var cookieHash = generator();
	return cookieHash
}

exports.authenticate = function(req, res, next) {
	var cookie = req.cookies.isLoggedin;
	if(cookie.data && (cookie.status === 200)) {
		return next();
	}
	res.redirect('/login');
}
