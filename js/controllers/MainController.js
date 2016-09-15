app.controller('MainController', ['$scope', 'StravaActiv',
	function($scope, StravaActiv) {
		StravaActiv.success(function(data) {
			$scope.activities = data;
		});

}]);