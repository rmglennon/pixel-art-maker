$(document).ready(function() {
  
  // capture the size values from the input box when submit is clicked
  $("#submitSize").on("click", function() {
    event.preventDefault();
    $("table").empty();
    var $gridHeight = $("#inputHeight").val().trim();
    var $gridWidth = $("#inputWidth").val().trim();
    
    // pass the height and width to a function to make the grid
    makeGrid($gridHeight, $gridWidth);
  });
  
  // create the grid as a table using the height and width
  function makeGrid(height, width) {
    
    var $table = $("#pixelCanvas");
    
    for (var i = 1; i <= height; i++) {
      $table.append("<tr></tr>"); 
      
      for (var j = 1; j <= width; j++) {
        $("tr:last").append("<td></td>");
        $("td").addClass("grid-box");
      }  
      
    }
  }
  
  // use event delegation to capture the click event 
  // set the color to the value of the color
  $("table").on("click", ".grid-box", function() {
    var $color = $("#colorPicker").val();
    console.log("box was clicked");
    $(this).css("background", $color);
  })
  
})