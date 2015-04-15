  var ministore_app = angular.module('ministore_app', ['ngRoute']);

  // Set up routing
  ministore_app.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/dashboard.html'
        })
        .when('/customers',{
            templateUrl: 'partials/customers.html'
        })
        .when('/orders',{
            templateUrl: 'partials/orders.html'
        })
        .when('/products',{
            templateUrl: 'partials/products.html'
        })

        .when('/dashboard',{
             templateUrl: 'partials/dashboard.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });