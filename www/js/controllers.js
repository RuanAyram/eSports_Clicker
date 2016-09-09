angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state, $ionicModal, $ionicPopup, $interval, $rootScope, $document) {

  $rootScope.cookies = 0;

  $rootScope.click = function() {
    $rootScope.cookies++;

    // An alert dialog
    if ($rootScope.cookies == 10) {
        var alertPopup = $ionicPopup.alert({
          title: '',
          scope: $scope,
          template: '<ul class="list text-center">' +
                      '<li class="item">' +
                        'Consulte a aba Shop' +
                      '</li>' +
                    '</ul>'
        });
    } 
  }

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

.controller('ShopCtrl', function($scope, $state, $ionicPopup, $document, $rootScope, $interval, Shops) {

  $scope.shops = Shops.all();

  $rootScope.top = 0;
  $rootScope.jungler = 0;
  $rootScope.mid = 0;
  $rootScope.adc = 0;
  $rootScope.suporte = 0;
  $rootScope.tecnico = 0;

  $rootScope.topPrice = function(){
    return (10 * Math.pow(1.1,$rootScope.top)).toFixed();
  }

  $rootScope.junglerPrice = function(){
    return (11 * Math.pow(1.1,$rootScope.jungler)).toFixed();
  }

  $rootScope.midPrice = function(){
    return (12 * Math.pow(1.1,$rootScope.mid)).toFixed();
  }

  $rootScope.adcPrice = function(){
    return (13 * Math.pow(1.1,$rootScope.adc)).toFixed();
  }

  $rootScope.suportePrice = function(){
    return (14 * Math.pow(1.1,$rootScope.suporte)).toFixed();
  }

  $rootScope.tecnicoPrice = function(){
    return (15 * Math.pow(1.1,$rootScope.tecnico)).toFixed();
  }

  $rootScope.buyTop = function() {
    if ($rootScope.cookies >= $rootScope.topPrice()){
        $rootScope.cookies -= $rootScope.topPrice();
        $rootScope.top++;
    }
  }

  $rootScope.buyJungler = function() {
    if ($rootScope.cookies >= $rootScope.junglerPrice()) {
        $rootScope.cookies -= $rootScope.junglerPrice();
        $rootScope.jungler++;
    }
  }

  $rootScope.buyMid = function() {
    if ($rootScope.cookies >= $rootScope.midPrice()){
        $rootScope.cookies -= $rootScope.midPrice();
        $rootScope.mid++;
    }
  }

  $rootScope.buyAdc = function() {
    if ($rootScope.cookies >= $rootScope.adcPrice()){
        $rootScope.cookies -= $rootScope.adcPrice();
        $rootScope.adc++;
    }
  }

  $rootScope.buySuporte = function() {
    if ($rootScope.cookies >= $rootScope.suportePrice()){
        $rootScope.cookies -= $rootScope.suportePrice();
        $rootScope.suporte++;
    }
  }

  $rootScope.buyTecnico = function() {
    if ($rootScope.cookies >= $rootScope.tecnicoPrice()){
        $rootScope.cookies -= $rootScope.tecnicoPrice();
        $rootScope.tecnico++;
    }
  }

  function update() {
    $rootScope.cookies += $rootScope.top;
    $rootScope.cookies += $rootScope.jungler;
    $rootScope.cookies += $rootScope.mid;
    $rootScope.cookies += $rootScope.adc;
    $rootScope.cookies += $rootScope.suporte;
    $rootScope.cookies += $rootScope.tecnico;
  };

  $rootScope.somarTodos = function(){
    return $rootScope.top + $rootScope.jungler + $rootScope.mid + $rootScope.adc + $rootScope.suporte + $rootScope.tecnico;
  }

  $document.ready(function(){
    $interval(update,1000);
  });

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

.controller('UpgradesCtrl', function($ionicLetterAvatarSelector, $scope, $state, $rootScope, Upgrades) {

  $scope.upgrades = Upgrades.all();

  $scope.upgrades.preco = 0;

})

.controller('LolCtrl', function($ionicLetterAvatarSelector, $scope, $state) {

  $scope.goLolUser = function() {
    $state.go('user-lol');
  }

  $scope.goHome = function() {
    $state.go('tab.home');
  }

});