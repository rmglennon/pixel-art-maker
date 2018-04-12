// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$( "#submitSize" ).on("click", function() {
  event.preventDefault();
  var $gridHeight = $("#inputHeight").val().trim();
  var $gridWidth = $("#inputWidth").val().trim();
  var $color = $("#colorPicker").val();
  makeGrid($gridHeight, $gridWidth, $color);
});


function makeGrid(height, width, color) {
  
var $table = $("#pixelCanvas");
  
  for (var i = 1; i <= height; i++) {
    
    $table.append("<tr></tr>"); 
    
    for (var j = 1; j <= width; j++) {
      console.log("width j ", j);
      $("tr:last").append("<td></td>");
      $("td").attr("class", "box");
    }  
  }
}

  //$("td").css("background", color);  
