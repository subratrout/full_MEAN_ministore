// Customer controller
  ministore_app.controller('CustomersController', function($scope, CustomerFactory){
    
    CustomerFactory.getCustomers(function(data){
      $scope.customers =data;
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