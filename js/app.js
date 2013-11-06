angular.module('presently', []).
provider('Weather', function() {
  var apiKey = "";

  this.setApiKey = function(key) {
    if (key) this.apiKey = key;
  };

  this.$get = function($http) {
    return {
    }
  };
})
.config(function(WeatherProvider) {
  WeatherProvider.setApiKey('39dd8ec0a20c38ab');
})
.controller('MainCtrl', function($scope, $timeout) {
  // Build the date object
  $scope.date = {};

  // Update function
  var updateTime = function() {
    $scope.date.raw = new Date();
    $timeout(updateTime, 1000);
  }

  // Kick off the update function
  updateTime();
});
