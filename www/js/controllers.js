angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.$root.data = {
    imgClicks : 0
  };

  $scope.imgClicked = function(event) {
    $scope.data.imgClicks++;
  }
})

.controller('ChatsCtrl', function($ionicLetterAvatarSelector,$scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
})

.controller('AccountCtrl', function($ionicLetterAvatarSelector, $scope, Upgrades) {
  $scope.upgrades = Upgrades.all();
});
