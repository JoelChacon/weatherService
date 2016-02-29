angular.module('myApp').controller("myMainController", function($scope, JoelsWeatherService){
	
	$scope.functionCall =function() {
		JoelsWeatherService.getWeather($scope.getWeatherFromAPI)
		.then(function(response){
				console.log('2ndResponse', response)
			$scope.weatherObj = response;
		})  
	}
})