// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');



// this is our friends.js file located at /server/controllers/friends.js
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
			  	var order = Order({name: req.body.name, item: req.body.item, quantity: req.body.quantity, date: req.body.date})
			  	console.log(req.body);
				  order.save(function(err, results) {
					  if(err) {
						  console.log(err);
					  } else {
						  res.json(results);
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
