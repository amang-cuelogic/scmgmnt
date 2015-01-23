var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/scmgmnt', function(error, db) {
    if(!error){
         console.log("We are connected");
    }
    else
       console.dir(error);
});

module.exports = mongoose.connection;