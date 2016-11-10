"use strict";
var Carlot = (function(oldCarlot){
  oldCarlot.resetBorder = function(reset){
    reset.classList = "col-sm-4 styled";
  },

  oldCarlot.changeBorder = function(modify) {
    modify.classList += " thickBorder"
  }
  return oldCarlot
})(Carlot || {});
