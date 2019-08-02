var mongoose = require('mongoose');
var dbURL = 'mongodb://mongodb:27017/idea-board';

module.exports = function(){
    mongoose.connect(dbURL);
    mongoose.connection.on('connected', function(){
        console.log("Mongoose connection is open to ", dbURL);
    });
    mongoose.connection.on('error', function(err){
        console.log("Mongoose connection has occured "+err+" error");
    });
    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose connection is disconnected");
    });
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose connection is disconnected due to application termination");
            process.exit(0)
        });
    });
}