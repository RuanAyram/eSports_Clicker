angular.module('starter.services', [])

.factory('Shops', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shops = [{
    id: 0,
    name: 'Top',
    preco: 0,
    qtde: 0,
    benefits: "+" + 1 + ' K$/seg',
    face: 'img/Img_roles/teleporte.png'
  }, {
    id: 1,
    name: 'Jungler',
    preco: 0,
    qtde: 0,
    benefits: "+" + 1 + ' K$/seg',
    face: 'img/Img_roles/golpear.png'
  }, {
    id: 2,
    name: 'Mid',
    preco: 0,
    qtde: 0,
    benefits: "+" + 1 + ' K$/seg',
    face: 'img/Img_roles/Incendiar.png'
  }, {
    id: 3,
    name: 'Adc',
    preco: 0,
    qtde: 0,
    benefits: "+" + 1 + ' K$/seg',
    face: 'img/Img_roles/curar.png'
  }, {
    id: 4,
    name: 'Suporte',
    preco: 0,
    qtde: 0,
    benefits: "+" + 1 + ' K$/seg',
    face: 'img/Img_roles/exhaust.png'
  }, {
    id: 5,
    name: 'Técnico',
    preco: 0,
    qtde: 0,
    benefits: "+" + 1 + ' K$/seg',
    face: 'img/Img_roles/tecnico.png'
  }];

  return {
    all: function() {
      return shops;
    },
    get: function(shopId) {
      for (var i = 0; i < shops.length; i++) {
        if (shops[i].id === parseInt(shopId)) {
          return shops[i];
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
    preco: 0,
    face: 'img/Img_roles/streamer.png'
  }, {
    id: 1,
    name: 'Killing Spree',
    preco: 0,
    face: ''
  }, {
    id: 2,
    name: 'Double Kill',
    preco: 0,
    face: ''
  }, {
    id: 3,
    name: 'Triple Kill',
    preco: 0,
    face: ''
  }, {
    id: 4,
    name: 'Quadra Kill',
    preco: 0,
    face: ''
  }, {
    id: 5,
    name: 'Penta Kill',
    preco: 0,
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
