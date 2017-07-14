app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.

    //site
    
      when('/', {
        templateUrl: 'view/home.html', 
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
}]);

