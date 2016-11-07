get_inventory = old_carlot()
.then( (inventory_data) => {
	console.log(inventory_data);
	}, (error) => {
	console.log("Something went wrong.", error);
});



