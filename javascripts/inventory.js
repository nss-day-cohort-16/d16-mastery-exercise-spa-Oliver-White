"use strict";
var Carlot = (function(oldCarlot){

  oldCarlot.showCars = function (oldCarlot) {
    var createDiv = "<div class='row'>";
    for (var i = 0; i < oldCarlot.length; i++){
      var newCar = document.createElement("div");
      newCar.classList = "col-sm-4 styled";
      createDiv = "<p class='make'>" + oldCarlot[i].year +  " " + oldCarlot[i].make + " " + oldCarlot[i].model + "<p class='description' id='" + i + "'>" + oldCarlot[i].description + "<p class='price'>" + oldCarlot[i].price + " " + "Dollars" + "</p>";
      newCar.innerHTML = createDiv;
      document.getElementById("outputDiv").appendChild(newCar);
    }
  } 

  Carlot.loadInventory(Carlot.showCars);
  return oldCarlot

})(Carlot || {});
