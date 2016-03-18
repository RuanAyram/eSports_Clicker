angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Top',
    preco: 'Preço:',
    qtde: 0,
    benefits: "+" + 1 + ' K$/seg',
    face: 'img/Img_roles/teleporte.png'
  }, {
    id: 1,
    name: 'Jg',
    preco: 'Preço:',
    qtde: 0,
    benefits: "+" +  1 + ' K$/seg',
    face: 'img/Img_roles/golpear.png'
  }, {
    id: 2,
    name: 'Mid',
    preco: 'Preço:',
    qtde: 0,
    benefits: "+" +   1 + ' K$/seg',
    face: 'img/Img_roles/Incendiar.png'
  }, {
    id: 3,
    name: 'Adc',
    preco: 'Preço:',
    qtde: 0,
    benefits: "+" +   1 + ' K$/seg',
    face: 'img/Img_roles/curar.png'
  }, {
    id: 4,
    name: 'Sup',
    preco: 'Preço:',
    qtde: 0,
    benefits: "+" +   1 + ' K$/seg',
    face: 'img/Img_roles/exhaust.png'
  }, {
    id: 5,
    name: 'Coach',
    preco: 'Preço:',
    qtde: 0,
    benefits: "+" +   1 + ' K$/seg',
    face: 'img/Img_roles/tecnico.png'
  }];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Upgrades', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var upgrades = [{
    id: 0,
    name: 'Streamer',
    preco: 'Preço:',
    face: 'img/Img_roles/streamer.png'
  }, {
    id: 1,
    name: 'Killing Spree',
    preco: 'Preço:',
    face: ''
  }, {
    id: 2,
    name: 'Rampage',
    preco: 'Preço:',
    face: ''
  }];

  return {
    all: function() {
      return upgrades;
    },
    get: function(upgradeId) {
      for (var i = 0; i < upgrades.length; i++) {
        if (upgrades[i].id === parseInt(upgradeId)) {
          return upgrades[i];
        }
      }
      return null;
    }
  };
});
