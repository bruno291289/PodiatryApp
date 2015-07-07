var myApp = angular.module('myApp', ['validation.match']);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {

        $scope.registerUser = function() {
            $http.post('/registeruser', $scope.user);
        }

    }
]);