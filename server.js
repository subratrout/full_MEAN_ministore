// require express
var express = require('express');

//require path
var path = require('path');

// instatntiate the app
var app = express();

// set up a static file server that points to "client" directory
app.use(express.static(path.join(__dirname, './client')));

// This goes in our server.js file so that we actually use the mongoose config file!
// Load mongoose before route loading
require('./config/mongoose.js');

// require routes file
require('./config/routes.js')(app);

app.listen(8000, function(){
	console.log('Server listening to port 8000');
})