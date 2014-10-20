(function(){
    var app = angular.module('cpmsTeam', [
        'ngRoute',
        'controller'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'view/view.html'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
})();