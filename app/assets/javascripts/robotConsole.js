$(document).ready(function(){
    var rupert = new Robot();

    var rupertAnimation = new DrawnRobot();
    rupertAnimation.canvas.add(rupertAnimation.body);
    invalidCommand = false;
    rupertAnimation.moveForward(2);
    rupert.instructions = [];
    rupert.fullInstructions = [];

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
    catch(error) { alert("Whoops! Looks like that was an invalid command. Do you need a hint?");
    invalidCommand = true;}

    // console.log(rupert.serializedInstructions());


    rupertAnimation.doTheseFrames(rupert.fullInstructions);
    rupertAnimation.getNextInstruction();

    var url = $(".edit_game").attr("action");

    $.ajax({
      url: "https://api.spark.io/v1/devices/54ff6b066667515129141367/robot",
      data: { "access_token": "555c011b99e78634692663f43c74d68c99f26528",
              "params": rupert.serializedInstructions() },
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
