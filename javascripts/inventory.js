var old_carlot = (function() {
	return new Promise( (resolve, reject) => {
		$.ajax({
		  url: "json/inventory.json"
		  }).done( function (data) {
		    resolve(data);
	    }).fail( (error) => {
		    reject(error);
	    });
  });
})(old_carlot | {});

// console.log("promise", old_carlot );

// function log_data(data) {
// 	console.log("data from XHR", data);
// }

// get_inventory = old_carlot()
// .then( (inventory_data) => {
// 	console.log(inventory_data);
// 	}, (error) => {
// 	console.log("Something went wrong.", error);
// });
