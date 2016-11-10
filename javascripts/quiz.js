"use strict";
var Carlot = (function(oldCarlot){

    oldCarlot.activateEvents = function(stuff) {
      var carList = document.getElementsByClassName("styled");
      for (var j = 0; j < carList.length; j++){
        carList[j].addEventListener('click', addBorder);
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
        var carDivElements = document.getElementsByClassName("description");
        for (var z = 0; z < carDivElements.length; z++){
          carDivElements[z].addEventListener("click", changeText)
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
        document.getElementById('input').addEventListener('keydown', write);
        function write() {
          spot.innerHTML = document.getElementById("input").value;
        }
      }
    }
    return oldCarlot;
})(Carlot || {});