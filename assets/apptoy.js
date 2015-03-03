// create our module and inject ngAnimate into it
angular.module('animateApp', ['ngAnimate'])

.controller('mainController', function($scope) {
  
  // set the default states for lions and cranes
  $scope.lions = false;
  $scope.cranes = false;
});