// First add the following two lines at the top of the Product controller so that we can access our model through var Product
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Product = mongoose.model('Product');



// this is our products.js file located at /server/controllers/products.js
// note the immediate function and the object that is returned
module.exports = (function() {
    return {
        show: function(req, res) {
            Product.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },

        add: function(req, res) {
            var product = Product({name: req.body.name, url: req.body.url, description: req.body.description, quantity: req.body.quantity, date: req.body.date})
            //console.log(req.body);
            product.save(function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },

        remove: function(req, res) {
            Product.remove({_id: req.body._id}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        }
    }
})();
