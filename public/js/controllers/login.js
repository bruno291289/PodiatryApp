var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {

        $scope.login = function() {
            $http.post('/login', $scope.user).success(function(){console.log('sucess');});
        }
    }
]);