// Orders Controller
ministore_app.controller('ProductsController', function($scope, ProductFactory){

    ProductFactory.getProducts(function(data){
        $scope.products =data;
    });

    $scope.addProduct = function(){
        ProductFactory.addProduct($scope.new_product, function(data){
        });
        $scope.new_product = {};

        ProductFactory.getProducts(function(data){
            $scope.products =data;
        });
    }

    $scope.deleteProduct = function(id){
        ProductFactory.deleteProduct(id, function(data){

        })

        ProductFactory.getProducts(function(data){
            $scope.products =data;
        });
    }
})