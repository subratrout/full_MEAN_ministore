// First add the following two lines at the top of the Order controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');


var current_date = new Date();

// this is our orders.js file located at /server/controllers/orders.js
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
    		show: function(req, res) {
			  Order.find({}, function(err, results) {
			    if(err) {
			      console.log(err);
			    } else {
			      res.json(results);
			    }
			  })
			},

		  	add: function(req, res) {
			  	var order = Order({name: req.body.name, item: req.body.item, quantity: req.body.quantity, date: current_date});
			
		  	  Product.findOne({name:req.body.item}, function(err, results2)
		  	  {
		  		  var quantity_left = results2.quantity -req.body.quantity;
		  		  
		  		  if(results2.quantity <=0 || (req.body.quantity >quantity_left) || req.body.quantity ==0)
		  		  {
		  		  	console.log("You can't order more than out of stock volume")
		  		  }
		  		  else{
				  order.save(function(err, results) {
					  if(err) {
						  console.log(err);
					  } else {
						  
							  	Product.update({name: req.body.item}, {quantity: quantity_left}, function(err, results3){
								  if(err){
									  console.log(err)
								  }
								  else{
									  res.json(results3);
								  }
							  })

							  }						  
						  })

					  }
				  })
		  	},

		  		remove: function(req, res) {
				  	Order.remove({_id: req.body._id}, function(err, results) {
					    if(err) {
					      console.log(err);
					    } else {
					      res.json(results);
					    }
					})
		  		}
  		}
})();
