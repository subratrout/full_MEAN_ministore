//Create Order Factory

   ministore_app.factory('OrderFactory', function($http){
    var factory = {};
    var orders = [];

    factory.getOrders = function(callback){
      
      $http.get('/orders').success(function(output){
       // friends = output;
        callback(output);
      })
    }
    factory.addOrder = function(info, callback){
      $http.post('/add_order', info).success(function(){

      });          
    };

    factory.deleteOrder = function(info, callback){
      $http.post('/remove_order', info).success(function(){
      })
    }
    return factory;
  });