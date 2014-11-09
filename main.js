var tutorialApp = angular.module('tutorialApp', []);

tutorialApp.controller('FirstController', function($scope) {
  $scope.data = {
    message: "Hello"
  };
});

tutorialApp.controller('SecondController', function($scope) {
  $scope.data = {
    message: "Goodbye"
  };
});