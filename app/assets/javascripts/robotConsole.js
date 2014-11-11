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
    var sourceCode, accessToken, url, robotInstructions;
    
    sourceCode = $("#game_status_string").val();
    url = $(".edit_game").attr("action");
    accessToken = "a77ab0d36e1778bb188ee681da72534f8db521da";

    try { eval(sourceCode); }
    catch(error) { alert("Whoops! Looks like that was an invalid command. Do you need a hint?");
    invalidCommand = true;}


    rupertAnimation.doTheseFrames(rupert.fullInstructions);
    rupertAnimation.getNextInstruction();
    rupertAnimation.rememberHistory(rupert.resetFullInstructions);

    url = $(".edit_game").attr("action");


    robotInstructions = rupert.serializedInstructions();

    $.ajax({
      url: "https://api.spark.io/v1/devices/54ff6b066667515129141367/robot",
      data: { "access_token": accessToken,
              "params": robotInstructions },
      type: "POST",
      dataType: "json",
      success: function(response){
        console.log(response);
        console.log("it worked");
      },
      error: function(response){
        console.log(response);
        console.log("crap");
      }
    });
   
    rupertAnimation.doTheseFrames(rupert.fullInstructions);
    rupertAnimation.getNextInstruction();
    console.log(robotInstructions)

    $.ajax({
      url: url,
      data: { instructions: robotInstructions, status_string: sourceCode },
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
        // setTimeout(function(){
        //   $(".game-console-button").show();
        //   $(".hint-link").show();
        //   $(".challenge-navigation a").show();
        // }, 2000);
        console.log("internal server pinged");
      },
      error: function(response){
        // console.log("crap");
      }
    });
  });
});
