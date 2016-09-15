app.controller('MainController', ['$scope', 'StravaActiv',
	function($scope, StravaActiv) {
   $scope.activities = StravaActiv.getJSONP(); 

}]);