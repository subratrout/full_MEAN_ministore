// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');



// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
    		show: function(req, res) {
			  Customer.find({}, function(err, results) {
			    if(err) {
			      console.log(err);
			    } else {
			      res.json(results);
			    }
			  })
			},

		  	add: function(req, res) {
			  	var customer = Customer({name: req.body.name, date: req.body.date})
			  	console.log(req.body);
				  customer.save(function(err, results) {
					  if(err) {
						  console.log(err);
					  } else {
						  res.json(results);
					  }
				  	})
		  	},

		  		remove: function(req, res) {
				  	Customer.remove({_id: req.body._id}, function(err, results) {
					    if(err) {
					      console.log(err);
					    } else {
					      res.json(results);
					    }
					})
		  		}
  		}
})();
