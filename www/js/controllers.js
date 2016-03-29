angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state, $ionicModal) {

  var cookies = 0;
  var Top = 0;
  var Jg = 0;
  var cursors = 0;

  $scope.cookieClick = function(number){
      cookies = cookies + number;
      document.getElementById("cookies").innerHTML = cookies;
  };

  $scope.buyCursor = function(){
      var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
      if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
          cursors = cursors + 1;                                   //increases number of cursors
      	cookies = cookies - cursorCost;                          //removes the cookies spent
          document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
          document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
      };
      var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
      document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
  };

  $scope.buyTop = function(){
      var TopCost = Math.floor(10 * Math.pow(1.1,Top));     //works out the cost of this cursor
      if(cookies >= TopCost){                                   //checks that the player can afford the cursor
        Top = Top + 1;                                   //increases number of cursors
      	cookies = cookies - TopCost;                          //removes the cookies spent
          document.getElementById('Top').innerHTML = Top;  //updates the number of cursors for the user
          document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
      };
      var nextCost = Math.floor(10 * Math.pow(1.1,Top));       //works out the cost of the next cursor
      document.getElementById('TopCost').innerHTML = nextCost;  //updates the cursor cost for the user
  };

  $scope.buyJg = function(){
      var JgCost = Math.floor(10 * Math.pow(1.2,Jg));     //works out the cost of this cursor
      if(cookies >= JgCost){                                   //checks that the player can afford the cursor
        Jg = Jg + 1;                                   //increases number of cursors
        cookies = cookies - JgCost;                          //removes the cookies spent
          document.getElementById('Jg').innerHTML = Jg;  //updates the number of cursors for the user
          document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
      };
      var nextCost = Math.floor(10 * Math.pow(1.2,Jg));       //works out the cost of the next cursor
      document.getElementById('JgCost').innerHTML = nextCost;  //updates the cursor cost for the user
  };

  window.setInterval(function(){

    //cookieClick(cursors);
    //cookies++;
    //console.log(cookies++);

  }, 1000);

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
