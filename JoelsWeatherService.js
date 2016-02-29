angular.module('myApp').service('JoelsWeatherService', function($http, $q){

	this.getWeather = function(city) {
		var deferred = $q.defer();

		$http({
			method: "GET",
			url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',us&units=imperial&appid=bf1d49cc7398cc3d05ce0f3e3ec2134c'
		}).then(function(response){
			var weatherList = [
			{
				temp: response.data.list[0].main.temp,
				desc: response.data.list[0].weather[0].description
			},
			{
				temp: response.data.list[7].main.temp,
				desc: response.data.list[0].weather[0].description
			},
			{
				temp: response.data.list[15].main.temp,
				desc: response.data.list[0].weather[0].description
			},
			{
				temp: response.data.list[23].main.temp,
				desc: response.data.list[0].weather[0].description
			},
			{
				temp: response.data.list[31].main.temp,
				desc: response.data.list[0].weather[0].description
			}
			];
			deferred.resolve(weatherList);
			console.log("1stResponse", response);
		})



		return deferred.promise;
	}
});


