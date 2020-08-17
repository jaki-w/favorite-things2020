//  Business Logic

let favoriteThings = [];

function addToArray (item1, item2, item3, item4, item5) {
  favoriteThings.push(item1, item2, item3, item4, item5);
  return favoriteThings;
};

// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const item1Input = $("#item1").val();
    const item2Input = $("#item2").val();
    const item3Input = $("#item3").val();
    const item4Input = $("#item4").val();
    const item5Input = $("#item5").val();

    addToArray(item1Input, item2Input, item3Input, item4Input, item5Input);
    let someFavorites= [favoriteThings[0], favoriteThings[1], favoriteThings[2]];
    $("#returnList").append("<li>" + someFavorites[0] + "</li");
    $("#returnList").append("<li>" + someFavorites[1] + "</li");
    $("#returnList").append("<li>" + someFavorites[2] + "</li");
  

  });

});