// Customer controller
  ministore_app.controller('CustomersController', function($scope, CustomerFactory, OrderFactory){
    
    CustomerFactory.getCustomers(function(data){
      $scope.customers =data;
    });

    OrderFactory.getOrders(function(data){
      $scope.orders =data;
    });
    
    $scope.addCustomer = function(){
      CustomerFactory.addCustomer($scope.new_customer, function(data){
      });
      $scope.new_customer = {};

      CustomerFactory.getCustomers(function(data){
        $scope.customers =data;
      });
    }

    $scope.deleteCustomer = function(id){
      CustomerFactory.deleteCustomer(id, function(data){

      })

      CustomerFactory.getCustomers(function(data){
        $scope.customers =data;
      });
    }   
  })