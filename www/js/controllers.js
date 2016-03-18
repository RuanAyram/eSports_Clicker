angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

  $scope.$root.data = {
    imgClicks : 0
  };

  $scope.imgClicked = function(event) {
    $scope.data.imgClicks++;
  }
})

.controller('ShopCtrl', function($ionicLetterAvatarSelector, $scope, Shops) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.shops = Shops.all();
})

.controller('UpgradesCtrl', function($ionicLetterAvatarSelector, $scope, Upgrades) {
  $scope.upgrades = Upgrades.all();
});
