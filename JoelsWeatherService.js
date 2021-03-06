angular.module('myApp').service('JoelsWeatherService', function($http, $q){

	this.getWeather = function(city) {
		var deferred = $q.defer();

		$http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',us&units=imperial&appid=bf1d49cc7398cc3d05ce0f3e3ec2134c'
		).then(function(response){
			var weatherData = response.data.list;
			var weatherList = [];
				function formatDate(timestamp) {
					console.log(timestamp);
					var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
					var d = new Date(Number.parseInt(timestamp) * 1000);
						return d.toLocaleString('en-US', options);
				}
				for (var i = 0; i < weatherData.length; i += 8) {
					weatherList.push({
						date: formatDate(weatherData[i].dt),
						temp: weatherData[i].main.temp,
						desc: weatherData[0].weather[0].description
					});
				}
			deferred.resolve(weatherList);
			console.log("1stResponse", response);
		});
		return deferred.promise;
	}
});
