/* Services */

var access_token = "7bdff1ce8562906d40570028677dbbc4d147769a";

app.factory('StravaActiv',function($resource) {
	return $resource('https://www.strava.com/api/v3/athlete/activities?access_token=' + access_token, {}, {
        getJSONP: {
          method: 'JSONP',
          isArray: true,
          params: {
              callback: 'JSON_CALLBACK'
          }
        }
      });

});