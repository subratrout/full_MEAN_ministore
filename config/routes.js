var customers = require('./../server/controllers/customers.js');
var orders = require('./../server/controllers/orders.js');
var bodyParser = require("body-parser");



module.exports = function(app){

	app.use(bodyParser.json());

	app.get('/customers', function(req, res){
		customers.show(req,res);

	});

	app.post('/add_customer', function(req, res){
		
		customers.add(req,res);
	});

	app.post('/remove_customer', function(req, res){
		
		customers.remove(req,res);
	});

	app.get('/orders', function(req, res){
		orders.show(req,res);

	});

	app.post('/add_order', function(req, res){
		
		orders.add(req,res);
	});

	app.post('/remove_order', function(req, res){
		
		orders.remove(req,res);
	});
}