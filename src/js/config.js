/**
 * App configuration.
 * Global app configuration including routes is set here.
 */
(function() {
	angular.module("app").config(appConfig);

	function appConfig($routeProvider) {
		routeConfig($routeProvider);
	}

	/**
	 * Routes
	 */
	function routeConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'intro.html'
		});

		$routeProvider.when('/events', {
			templateUrl: 'events.html'
		});
	}
})();