angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state, $ionicModal, $document, $interval) {

  $scope.cookies = 0;
  $scope.clickers = 0;
	$scope.top = 0;

  $scope.click = function() {
    $scope.cookies++;
  }

  $scope.clickerPrice = function(){
    return (10 * Math.pow(1.1,$scope.clickers)).toFixed();
  }

	$scope.topPrice = function(){
    return (11 * Math.pow(1.1,$scope.top)).toFixed();
  }

  $scope.buyClicker = function() {
    if ($scope.cookies >= $scope.clickerPrice()) {
        $scope.cookies -= $scope.clickerPrice();
        $scope.clickers++;
    }
  }

  $scope.buyTop = function() {
    if ($scope.cookies >= $scope.topPrice()){
		    $scope.cookies -= $scope.topPrice();
		    $scope.top++;
		}
  }

  function update() {
    $scope.cookies += $scope.clickers;
		$scope.cookies += $scope.top;
  };

  $document.ready(function(){
    $interval(update,1000);
  });

  /*click na Tab Home
  $scope.$root.data = {
    imgClicks : 0
  };

  $scope.imgClicked = function(event) {
    $scope.data.imgClicks++;
  };*/

  /*Modal na Tela Index*/
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

})

.controller('ShopCtrl', function($scope, $state, $ionicPopup, Shops) {

  $scope.shops = Shops.all();

  // An alert dialog
  $scope.alertShop = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Beneficios Shop',
      scope: $scope,
      template: '<ion-item class="item" id="item-UP"' +
                'style="background-color: #252233 !important" ng-repeat="shop in shops">' +
                '<h2>{{shop.name}}: {{shop.benefits}}</h2></ion-item>'
    });
  };
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
