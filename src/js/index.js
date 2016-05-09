(function () {

	console.log('FRIGE!');

})();
var module =angular.module('fridge', [ 'ngRoute']);

module.config(function($routeProvider, $httpProvider ) {

	$routeProvider.when('/', {
		templateUrl : 'index.html',
		controller : 'home',
		controllerAs: 'controller'
	}).otherwise('/')
});

module.controller('home', function(){
	var self = this;

	self.hello_world = "Hola heladera!!!";
});