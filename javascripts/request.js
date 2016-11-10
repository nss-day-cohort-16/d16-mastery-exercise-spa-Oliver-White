"use strict";
var Carlot = (function(oldCarlot){
  var inventory = [];

  return {
    loadInventory: function(oldCarlot){
      var request = new XMLHttpRequest();
      request.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        oldCarlot(inventory);
      });
      request.open("GET", "json/inventory.json");
      request.send();
    },

    getInventory: function(car){ 
      return inventory += car;
    }
  }

})(Carlot || {});
