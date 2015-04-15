// This is the Product.js file located at /server/models/product.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');

// Create productSchema

var ProductSchema = new mongoose.Schema({
    name: String,
    url: String,
    description: String,
    quantity: Number,
    date: {type: Date, default: Date.now}
});

// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)

var Mongoose = mongoose.model('Product', ProductSchema);
