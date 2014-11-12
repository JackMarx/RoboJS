$(document).ready(function(){
    var rupert = new Robot();
    var rupertAnimation = new DrawnRobot();
    rupertAnimation.canvas.add(rupertAnimation.body);
    rupertAnimation.moveForward(2);
    rupert.instructions = [];
    rupert.fullInstructions = [];
    rupert.resetInstructions = [];
    rupert.resetFullInstructions = [];

  $("#game_status_string").ace({ theme: 'monokai', lang: 'javascript' });

  $(".game-console").on("click", ".hint-link", function(event){
    event.preventDefault();
    $(".hint").toggle();
  });

  // $(".reset-robot-button").hide();

  $(".game-console").on("submit", ".edit_game", function(event){
    event.preventDefault();

    var sourceCode, url, robotInstructions, counter;
    sourceCode = $("#game_status_string").val();
    url = $(".edit_game").attr("action");

    counter = 0;
    // console.log(sourceCode);
    try { eval(sourceCode); }
    catch(error) { alert("Whoops! Looks like that was an invalid command. Do you need a hint?");
                   invalidCommand = true; }



    rupertAnimation.rememberHistory(rupert.resetFullInstructions);

    rupertAnimation.doTheseFrames(rupert.fullInstructions);
    console.log(rupert.fullInstructions);
    rupertAnimation.getNextInstruction();
    robotInstructions = rupert.serializedInstructions();

    // pingRobot(robotInstructions);w

    // rupertAnimation.rememberHistory(rupert.resetFullInstructions);

    $.ajax({
      url: url,
      data: { instructions: robotInstructions, status_string: sourceCode },
      type: "put",
      success: function(response){
        $(".game-console").html(response);
        rupert.instructions = [];
        $("#game_status_string").ace({ theme: 'monokai', lang: 'javascript' });

        if(invalidCommand === false){
          $(".game-console-button").hide();
          $(".hint-link").hide();
          $(".challenge-navigation a").hide();
          $(".reset-robot-button").hide();
          invalidCommand = false;
      }
        invalidCommand = false;
        console.log("internal server pinged");
      },
      error: function(response){
        // console.log("crap");
      }
    });
  });

  $(".game-console").on("click", ".reset-robot-button", function(event){
      event.preventDefault();
      rupertAnimation.reverseCommands();
      rupert.reverseCommands();
      $(".game-console-button").prop("disabled",true);
      $(".game-console-button").val("Input Locked");
      $(".game-console-button").css("background", "#787868");
      $(".reset-robot-button").hide();
    });
});
