angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state, $ionicModal) {

  $scope.$root.data = {
    imgClicks : 0
  };

  $scope.imgClicked = function(event) {
    $scope.data.imgClicks++;
  };

  $ionicModal.fromTemplateUrl('templates/extras/modal-Button-config.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

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

  $scope.goHome = function() {
    $state.go('tab.home');
  }
});
