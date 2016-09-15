/* Services */

var access_token = "7bdff1ce8562906d40570028677dbbc4d147769a";

app.factory('StravaActiv', ['$http', function($http) {
	return $http.get('https://www.strava.com/api/v3/athlete/activities?access_token=' + access_token);
	.success(function(data) {
    	return data;
  	})
  	.error(function(err) {
    	return err;
  	});
});