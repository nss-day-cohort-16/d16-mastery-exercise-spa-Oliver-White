$.ajax({ url: "json/inventory.json" })
    .done((data) => {
  console.log("data", data.cars);
  var output = document.getElementById('container');

  for(var i =0, inventory=""; i < data.cars.length; i++){

    if(i % 3 === 0){
        inventory += `<div class="row">`; 
      }

      inventory += `<div class="col-md-4 card">`;
      inventory +=  `<h3>${data.cars[i].make}</h3>` ;
      inventory +=  `<h4>${data.cars[i].model}</h4>`;
      inventory +=  `<p>${data.cars[i].price}</p>
              <p class="description">${data.cars[i].description}</p></div>`;

    if((i+1) % 3 ===0){
        inventory += `</div>`;
      }

    }
      output.innerHTML += inventory;
      var $targetCard;
      var $inputField;
      $(".card").click( (event) => {
        $inputField = $(".form-control");
        $targetCard =  $(event.currentTarget);
        $(".card").removeClass("clicked");
        $targetCard.addClass("clicked");
        $inputField.val("");
        $inputField[0].focus();
        $inputField.keyup( (event) => {
          $targetCard =  $(".clicked");
          $targetCard.find(".description").text(event.currentTarget.value);
          console.log(event);
        })
      });
      

            // Do DOM manipulation stuff here
  }).fail ( (error) => {
      console.log(`Error getting inventory: ${error}`);
  });












