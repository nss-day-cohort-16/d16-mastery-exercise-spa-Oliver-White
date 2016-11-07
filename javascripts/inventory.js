function get_inventory() {
	return new Promise( (resolve, reject) => {
		$.ajax({
		url: "json/inventory.json"
		}).done( function (data) {
		resolve(data);
	}).fail( (error) => {
		reject(error);
	});
  });
}	

// function log_data(data) {
// 	console.log("data from XHR", data);
// }

get_inventory()
.then( (inventory_data) => {
	console.log(inventory_data);
	}, (error) => {
	console.log("Something went wrong.", error);
});