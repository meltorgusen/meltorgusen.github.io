var app = angular.module('yogasite', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  var homeState = {
    name: 'home',
    url: '',
    templateUrl: '/partials/about.html',
    resolve: {
      headerImg: function(){
        return '/img/003.jpg';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'yoga'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: '/partials/about.html',
    resolve: {
      headerImg: function(){
        return 'about';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'yoga'
  }

  var classesState = {
    name: 'classes',
    url: '/classes',
    templateUrl: '/partials/classes.html',
    resolve: {
      headerImg: function(){
        return 'classes';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'yoga'
  }

  var locationsState = {
    name: 'classes.locations',
    parent: 'classes',
    url: '/locations',
    templateUrl: '/partials/locations.html',
    resolve: {
      headerImg: function(){
        return 'classes';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'yoga'
  }

  var calendarState = {
    name: 'classes.calendar',
    parent: 'classes',
    url: '/calendar',
    templateUrl: '/partials/calendar.html',
    resolve: {
      headerImg: function(){
        return '/img/003.jpg';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'yoga'
  }

  var offTheMatState = {
    name: 'off-the-mat',
    url: '/off-the-mat',
    templateUrl: '/partials/offmat.html',
    resolve: {
      headerImg: function(){
        return 'offmat';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'yoga'
  }

  var contactState = {
    name: 'contact',
    url: '/contact',
    templateUrl: '/partials/contact.html',
    resolve: {
      headerImg: function(){
        return 'contact';
      }
    },
    controller: 'SiteCtrl',
    controllerAs: 'yoga'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(classesState);
  $stateProvider.state(locationsState);
  $stateProvider.state(calendarState);
  $stateProvider.state(offTheMatState);
  $stateProvider.state(contactState);
})
.controller('SiteCtrl', ['$scope', 'headerImg', function($scope, headerImg){
  this.title = 'Mel Torgusen';
  console.log(headerImg);
  this.headerImg = headerImg;
}]);

