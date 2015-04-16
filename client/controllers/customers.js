// Customer controller
  ministore_app.controller('CustomersController', function($scope, CustomerFactory, OrderFactory){
    
    var d = new Date();
    $scope.date_onsite = d.getTime();

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


      $scope.millisecondsToStr = function(milliseconds) {

          function numberEnding (number) {
              return (number > 1) ? 's' : '';
          }

          var temp = Math.floor(milliseconds / 1000);

          var years = Math.floor(temp / 31536000);
          if (years) {
              return years + ' years ago' + numberEnding(years);
          }
          var days = Math.floor((temp %= 31536000) / 86400);
          if (days) {
              return days + ' days ago' + numberEnding(days);
          }
          var hours = Math.floor((temp %= 86400) / 3600);
          if (hours) {
              return hours + ' hours ago' + numberEnding(hours);
          }
          var minutes = Math.floor((temp %= 3600) / 60);
          if (minutes) {
              return minutes + ' minutes ago' + numberEnding(minutes);
          }
          var seconds = temp ;
          if (seconds) {
              return seconds + ' seconds ago' + numberEnding(seconds);
          }
          return 'less than a second ago'; //'just now' //or other string you like;
      }

  })