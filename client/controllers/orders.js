// Orders Controller
ministore_app.controller('OrdersController', function($scope, OrderFactory, CustomerFactory, ProductFactory){

    CustomerFactory.getCustomers(function(data){
      $scope.customers =data;
    });
    
    OrderFactory.getOrders(function(data){
      $scope.orders =data;
    });

    ProductFactory.getProducts(function(data){
        $scope.products =data;
    });


    
    $scope.addOrder = function(){
      OrderFactory.addOrder($scope.new_order, function(data){
      });
      $scope.new_order = {};

      OrderFactory.getOrders(function(data){
        $scope.orders =data;
      });
    }

    $scope.deleteOrder = function(id){
      OrderFactory.deleteOrder(id, function(data){

      })

      OrderFactory.getOrders(function(data){
        $scope.orders =data;
      });
    }   
  })