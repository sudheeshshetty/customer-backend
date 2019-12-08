var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/customer");

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});

mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});

// mongoose.connect('mongodb://localhost/mongodb');

module.exports.user=mongoose.model('User',new Schema({
    name:String,
    email:String,
},{strict: false}));