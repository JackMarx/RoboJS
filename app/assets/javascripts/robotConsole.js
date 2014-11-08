$(document).ready(function(){
  $(".edit_game").on("submit", function(event){
    event.preventDefault();
    var sourceCode = $("#game_status_string").val();
    
    var robot = new Robot();

    eval(sourceCode);
    
    console.log(robot.serializedInstructions());
    
    var url = $(".edit_game").attr("action");
    // var form = $(".edit_game").serialize();

    var response = $.put(url, {instructions:robot.serializedInstructions(), status_string:sourceCode});
    response.done(function() {
      console.log("it worked");
    });
    response.fail(function () {
      console.log("crap");
    });
  });
});

