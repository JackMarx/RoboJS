$(document).ready(function(){
  $(".edit_game").on("submit", function(event){
  event.preventDefault();
  var form = $(".edit_game").serialize();
  var url = $(".edit_game").attr("action");

  var evaled = eval(thing)

  $.ajax({
      url: url,
      type: "post",
      dataType: "json",
      data: evaled, // pick up instructions for one device that is tied to one user
      success: function(response){
      $(".edit_game")[0].reset();
      $(".edit_game #game_status_string").text(response.input);
      $("div.success").html(response.message)
      },
      error: function(response){
        alert("You have made an error")
      }
    });
  });
});
