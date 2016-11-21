"use strict";
let Carlot= (function(){
	
  let inventory = [];

	return {
		load_inventory: function(whats_it){
			let ping = new XMLHttpRequest();
			ping.addEventListener("load", function () {
				inventory = JSON.parse(this.responseText).cars;
				whats_it(inventory);
			});

		ping.open("GET", "json/inventory.json");
		ping.send();
		},

		get_inventory: function(){ 
			return inventory;
		}
	};

})();