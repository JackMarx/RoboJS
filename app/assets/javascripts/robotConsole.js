$(document).ready(function(){
  $(".edit_game").on("submit", function(event){
    event.preventDefault();
    var sourceCode = $("#game_status_string").val();
    
    var robot = new Robot();
    eval(sourceCode);
    console.log(robot.serializedInstructions());
    
    // var form = $(".edit_game").serialize();
    var url = $(".edit_game").attr("action");

    var response = $.post(url, {instructions:robot.serializedInstructions()});
    response.done(function() {
      console.log("it worked");
    });
    response.fail(function () {
      console.log("crap");
    });




    // $.ajax({
    //     url: url,
    //     type: "post",
    //     dataType: "json",
    //     data: form,
    //     success: function(response){
    //     $(".edit_game")[0].reset();
    //     $(".edit_game #game_status_string").text(response.input);
    //     $("div.success").html(response.message)
    //     },
    //     error: function(response){
    //       alert("You have made an error")
    //     }
    // });
  });
});

