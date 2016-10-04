var app = angular.module('yogasite', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '',
    templateUrl: '/partials/about.html',
    resolve: {
      header: function() {
        return '/img/001.jpg';
      },
      title: function() {
        return 'Mel Torgusen';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'mt'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: '/partials/about.html'
  }

  var classesState = {
    name: 'classes',
    url: '/classes',
    templateUrl: '/partials/classes.html'
  }

  var locationsState = {
    name: 'classes.locations',
    parent: 'classes',
    url: '/locations',
    templateUrl: '/partials/locations.html'
  }

  var calendarState = {
    name: 'classes.calendar',
    parent: 'classes',
    url: '/calendar',
    templateUrl: '/partials/calendar.html'
  }

  var offTheMatState = {
    name: 'off-the-mat',
    url: '/off-the-mat',
    templateUrl: '/partials/offmat.html'
  }

  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: '/partials/contact.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(classesState);
  $stateProvider.state(locationsState);
  $stateProvider.state(calendarState);
  $stateProvider.state(offTheMatState);
  $stateProvider.state(contactState);
})
.controller('SiteCtrl', ['$scope', 'title', function($scope, title){
  // NOTE this is only passed to the state?
  console.log(title);
  this.title = title;
}]);

