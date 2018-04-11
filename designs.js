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
  // var $tr = $("<tr>");
  // var $td = $("<td>");
  var $table = $("#pixelCanvas");
  console.log(height, width, color);

  for (var i = 0; i <= height; i++) {
    console.log("i ", i);
    var $tr = $("<tr>");
    var $td = $("<td>");
    $tr.append($td);
    $td.css("background", color);
    $table.append($tr);

    for (var j = 0; j <= width; j++) {
        var $tr2 = $("<tr>");
        var $td2 = $("<td>");
          $tr2.append($td2);
          console.log("j ", j);
              $table.append($tr2);
    }
  }


}
