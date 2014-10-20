(function(){
    var app = angular.module('controller', []);

    app.controller('PresenterController', ['$scope', function($scope){
        $scope.presenter = 'Genhan Chen';
    }])
})();