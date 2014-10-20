(function(){
    var app = angular.module('controller', []);

    app.controller('PresenterController', ['$scope', '$http', function($scope, $http){
        $scope.presenter = 'Genhan Chen';

        $scope.people = [];
        $http.get('data/people.json').success(function(resp, status){
            $scope.people = resp.data;
        }).error(function(err, status){
            console.log(err);
        });
    }])
})();