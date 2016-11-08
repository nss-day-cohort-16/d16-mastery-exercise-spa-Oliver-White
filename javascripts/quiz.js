// console.log("data", old_carlot);

// var old_carlot = (function() {
// 	return new Promise( (resolve, reject) => {
// 		$.ajax({
// 		  url: "json/inventory.json"
// 		  }).done( function (data) {
// 		    resolve(data);
// 	    }).fail( (error) => {
// 		    reject(error);
// 	    });
//   });
// })(old_carlot || {});


// var carlot = $.get("json/inventory.json", function (data) {console.log(data);});


// var carlot = (function() { 
//   var inventory = "";
//   inventory = $.get("json/inventory.json", function (data) {console.log(data);});
//   })(carlot || {});




// $(document).ready(() => {
//   $.ajax({ url: "json/inventory.json" })
//     .done((data) => {
//       // Do DOM manipulation stuff here
//   }.fail( (error) => {
//     console.log(`Error getting inventory:' ${error}`);
//   }
// });
