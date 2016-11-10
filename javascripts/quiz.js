"use strict";
var Carlot = (function(oldCarlot){

    oldCarlot.activateEvents = function(stuff) {
      var cars = document.getElementsByClassName("styled");
      for (var j = 0; j < cars.length; j++){
        cars[j].addEventListener('click', addBorder);
      }
      function addBorder() {
        if (event.currentTarget.className === "col-sm-4 styled"){
        Carlot.changeBorder(event.currentTarget);
        }
        else if (event.currentTarget.className === "col-sm-4 styled thickBorder"){
          Carlot.resetBorder(event.currentTarget);
        }
        addText();
      }
      function addText () {
        var carStuff = document.getElementsByClassName("description");
        for (var a = 0; a < carDivElements.length; a++){
          carStuff[a].addEventListener("click", changeText)
        }
        changeText();
      }
        function changeText() {
          document.getElementById("input").value = " ";
          document.getElementById('input').focus();
          if(event.target.className === "description"){
            changeDescription(event.target);
          };
        }

        function changeDescription (spot) {
        document.getElementById('input').addEventListener('keyup', write);
        function write() {
          spot.innerHTML = document.getElementById("input").value;
        }
      }
    }
    return oldCarlot;
})(Carlot || {});