var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {

    	$scope.patients = {};

        var clearPatient = function(){
            $scope.patient = {phones:[], address:{city: "Ponta Grossa", country: "Brasil"}};
        };

        clearPatient();

        var clearPhone = function(){
            $scope.phone = {};
        };

        clearPhone();

        var refresh = function() {
            $http.get('/patients')
            .success(
            	function(data){
					$scope.patients = data;
            	}
            	);
        };

        refresh();

        $scope.save = function(){
            $http.post('/patient', $scope.patient)
                .success(
                    function(){
                        clearPatient();
                        refresh();
                    }
                    );
        };

        $scope.addPhone = function(){
            $scope.patient.phones.push($scope.phone);
            clearPhone();
        }

    }
]);