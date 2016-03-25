angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state) {

  $scope.$root.data = {
    imgClicks : 0
  };

  $scope.imgClicked = function(event) {
    $scope.data.imgClicks++;
  }
})

.controller('ShopCtrl', function($scope, $state, Shops) {

  $scope.shops = Shops.all();
})

.controller('UpgradesCtrl', function($ionicLetterAvatarSelector, $scope, $state, Upgrades) {

  $scope.upgrades = Upgrades.all();
})

.controller('LolCtrl', function($ionicLetterAvatarSelector, $scope, $state) {

  $scope.goLolUser = function() {
    $state.go('user-lol');
  }
});
