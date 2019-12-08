var express = require('express');
var app = express();
var router = express.Router();
var ip = require('ip');
var bodyParser = require('body-parser');

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', require('./controller/customer')(router));

app.listen(8000, function () {
    console.log("Node Server is setup and it is listening on http://" + ip.address() + ":8000");
})