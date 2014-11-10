$(document).ready(function(){
    var rupert = new DrawnRobot();
    rupert.canvas.add(rupert.body);
    rupert.moveForward(2);
    rupert.instructions = [];

  $("#game_status_string").ace({ theme: 'monokai', lang: 'javascript' });

  $(".game-console").on("click", ".hint-link", function(event){
    event.preventDefault();
    $(".hint").toggle();
  });

  $(".game-console").on("submit", ".edit_game", function(event){
    event.preventDefault();
    var sourceCode = $("#game_status_string").val();
    // console.log(sourceCode);

    try { eval(sourceCode); }
    catch(error) { alert("Whoops! Looks like that was an invalid command. Do you need a hint?"); }
    // var arrSourceCode = sourceCode.split("\n");
    // for(var i=0;i < arrSourceCode.length; i++){
    //   if(arrSourceCode[i] !== ""){
    //     eval(setTimeout(arrSourceCode[i], 1200))
    //   }
    // }
    console.log(rupert.serializedInstructions());

    var url = $(".edit_game").attr("action");

    $.ajax({
      url: url,
      data: { instructions: rupert.serializedInstructions(), status_string: sourceCode },
      type: "put",
      success: function(response){
        $(".game-console").html(response);
        rupert.instructions = [];
        $("#game_status_string").ace({ theme: 'monokai', lang: 'javascript' });

        $(".game-console-button").hide();
        setTimeout(function(){$(".game-console-button").show();}, 2000);
        // console.log("it worked");
      },
      error: function(response){
        // console.log("crap");
      }
    });
  });
});
