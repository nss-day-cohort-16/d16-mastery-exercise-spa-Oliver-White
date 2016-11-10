"use strict";
var Carlot = (function(oldCarlot){
  oldCarlot.resetBorder = function(item){
    item.classList = "col-sm-4 styled";
  },

  oldCarlot.changeBorder = function(target) {
    target.classList += " thickBorder"
  }
  return oldCarlot
})(Carlot || {});
