/* GET home page. */
var userData = require("../schema/users").user;

exports.index = function(req, res){
  res.render('index', { title: 'School Management' });
};
exports.login = function(req, res){
  //res.render('layout', { title: 'School Management Login' });
    var username = req.body.username;
    var password = req.body.password;
	if (username == '' || password == '') {
	    return res.send(401,'Enter the correct username and password');
	}


	userData.find({'username' : username}, function(err, user){
	    if (err) {
	        console.log(err);
	        return res.send(401,'Enter the correct username and password');
	    }else{
	    	//console.log(user)
	    	//console.log(user[0].username)
	    	//console.log(username +' ' +user[0].username +password +' ' +user[0].password);
	    	if (username === user[0].username && password === user[0].password) {
	    		return res.send(user[0]);
			}else{
				return res.send(401,'Enter the correct username and password');
			} 
	    }
	    //var randomCookie = GenerateCookie();
	    //res.send(randomCookie);
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
