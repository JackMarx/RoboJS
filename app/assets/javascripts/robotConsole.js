$(document).ready(function(){
  
  $(".edit-game").on("submit", function(event){
    event.preventDefault();
    var sourceCode = $("#game_status_string").val();
    
    var rupert = new Robot();
    eval(sourceCode);
    
    console.log(rupert.serializedInstructions());
    
    var url = $(".edit_game").attr("action");

    $.ajax({
      url: url,
      data: { instructions: rupert.serializedInstructions(), status_string: sourceCode },
      type: "put",
      success: function(response){
        
        console.log(response);
        console.log("it worked");
      },
      error: function(response){
        console.log("crap");
      }
    });
    
  });
});

