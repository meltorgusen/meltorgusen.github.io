var app = angular.module('yogasite', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '',
    templateUrl: 'about.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'about.html'
  }

  var classesState = {
    name: 'classes',
    url: '/classes',
    templateUrl: 'classes.html'
  }

  var locationsState = {
    name: 'classes.locations',
    parent: 'classes',
    url: '/locations',
    templateUrl: 'locations.html'
  }

  var calendarState = {
    name: 'classes.calendar',
    parent: 'classes',
    url: '/calendar',
    templateUrl: 'calendar.html'
  }

  var offTheMatState = {
    name: 'off-the-mat',
    url: '/off-the-mat',
    templateUrl: 'offmat.html'
  }

  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: 'contact.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(classesState);
  $stateProvider.state(locationsState);
  $stateProvider.state(calendarState);
  $stateProvider.state(offTheMatState);
  $stateProvider.state(contactState);

})
.controller('SiteCtrl', ['$scope', function($scope){
  $scope.title = 'Mel Torgusen';
}]);

