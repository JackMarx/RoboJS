$(document).ready(function(){
    var rupert = new Robot();
    var rupertAnimation = new DrawnRobot();
    rupertAnimation.canvas.add(rupertAnimation.body);
    invalidCommand = false;
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

  $(".game-console").on("submit", ".edit_game", function(event){
    event.preventDefault();

    var sourceCode, url, robotInstructions, counter, accessToken;
    
    sourceCode = $("#game_status_string").val();
    url = $(".edit_game").attr("action");
    
    try { eval(sourceCode); }
    catch(error) { alert("Whoops! Looks like that was an invalid command. Do you need a hint?");
    invalidCommand = true;}

    accessToken = "a77ab0d36e1778bb188ee681da72534f8db521da";
    counter = 0;
    function pingRobot(){
      $.ajax({
      url: "https://api.spark.io/v1/devices/54ff6b066667515129141367/robot",
      data: { "access_token": accessToken,
              "params": robotInstructions },
      async: false,
      type: "POST",
      dataType: "json",
      success: function(response){
        console.log("it worked");
        console.log(response);
        if((response.error === "Timed out.") && (counter < 3)){
          console.log("Trying again.");
          console.log(counter);
          counter++;
          pingRobot();
        } else if((response.error === "Timed out.") && (counter >= 3)){
          console.log("you waited too long");
          $(".container").html("<h1 class='timeout-error'>You sure have been waiting a long time. Why don't you come back later?</h1>");
        } else if(typeof response.error !== "undefined") {
          $(".container").html("<h1 class='unknown-error'>I'm not sure what's happening. Please contact a developer.</h1>");
        }
      },
      error: function(response){
        console.log(response);
        console.log("crap");
      }
    });
    }
    pingRobot();

    rupertAnimation.rememberHistory(rupert.resetFullInstructions);

    rupertAnimation.doTheseFrames(rupert.fullInstructions);
    rupertAnimation.getNextInstruction();

    robotInstructions = rupert.serializedInstructions();

    $.ajax({
      url: url,
      data: { instructions: rupert.serializedInstructions(), status_string: sourceCode },
      type: "put",
      success: function(response){
        $(".game-console").html(response);
        rupert.instructions = [];
        $("#game_status_string").ace({ theme: 'monokai', lang: 'javascript' });
        if(invalidCommand === false){
          invalidCommand = false;
          $(".game-console-button").hide();
          $(".hint-link").hide();
          $(".challenge-navigation a").hide();
        }
      }
    });
  });
});
