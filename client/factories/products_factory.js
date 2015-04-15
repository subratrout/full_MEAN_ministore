//Create Product Factory

ministore_app.factory('ProductFactory', function($http){
    var factory = {};
    var products = [];

    factory.getProducts = function(callback){

        $http.get('/products').success(function(output){
            callback(output);
        })
    }
    factory.addProduct = function(info, callback){
        $http.post('/add_product', info).success(function(){

        });
    };

    factory.deleteProduct = function(info, callback){
        $http.post('/remove_product', info).success(function(){
        })
    }
    return factory;
});