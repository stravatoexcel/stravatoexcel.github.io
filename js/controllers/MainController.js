app.controller('MainController', ['$scope', 'StravaActiv',
	function($scope, StravaActiv) {
   $scope.activties = StravaActiv.getJSONP(); 

}]);