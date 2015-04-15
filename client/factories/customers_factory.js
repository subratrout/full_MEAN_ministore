//Create Customers Factory
ministore_app.factory('CustomerFactory', function($http){
    var factory = {};
    var customers = [];

    factory.getCustomers = function(callback){
      
      $http.get('/customers').success(function(output){
       // friends = output;
        callback(output);
      })
    }
    factory.addCustomer = function(info, callback){
      $http.post('/add_customer', info).success(function(){

      });          
    };

    factory.deleteCustomer = function(info, callback){
      $http.post('/remove_customer', info).success(function(){
      })
    }
    return factory;
  });