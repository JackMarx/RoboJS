$(document).ready(function(){
    var rupert = new DrawnRobot();
    rupert.canvas.add(rupert.body);
    rupert.moveForward(2);
    rupert.instructions = []

  $(".game-console").on("click", ".hint-link", function(event){
    event.preventDefault();
    $(".hint").toggle();
  });

  $(".game-console").on("submit", ".edit_game", function(event){
    event.preventDefault();
    var sourceCode = $("#game_status_string").val();
    console.log(sourceCode);
    eval(sourceCode);

    console.log(rupert.serializedInstructions());

    var url = $(".edit_game").attr("action");

    $.ajax({
      url: url,
      data: { instructions: rupert.serializedInstructions(), status_string: sourceCode },
      type: "put",
      success: function(response){
        $(".game-console").html(response);
        rupert.instructions = [];
        console.log("it worked");
      },
      error: function(response){
        console.log("crap");
      }
    });
  });
});
