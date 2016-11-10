"use strict";
var Carlot = (function(oldCarlot){

  oldCarlot.displayCars = function (oldCarlot) {
    var createDisplay = "<div class='row'>";
    for (var i = 0; i < oldCarlot.length; i++){
      var newCar = document.createElement("div");
      newCar.classList = "col-sm-4 styled";
      createDisplay = "<p class='make'>" + oldCarlot[i].year +  " " + oldCarlot[i].make + " " + oldCarlot[i].model + "<p class='description' id='" + i + "'>" + oldCarlot[i].description + "<p class='price'>" + oldCarlot[i].price + " " + "Dollars" + "</p>";
      newCar.innerHTML = createDisplay;
      document.getElementById("outputDiv").appendChild(newCar);
    }
  } 

  Carlot.loadInventory(Carlot.displayCars);
  return oldCarlot

})(Carlot || {});
