//Create Customers Factory
ministore_app.factory('DashboardFactory', function($http){
    var factory = {};

    factory.getCustomers = function(callback){

        $http.get('/customers').success(function(output){
            callback(output);
        })
    }

    factory.getOrders = function(callback){

        $http.get('/orders').success(function(output){
            callback(output);
        })
    }

    factory.getProducts = function(callback){

        $http.get('/products').success(function(output){
            callback(output);
        })
    }

    return factory;
});
