function pingRobot(robotInstructions){
  $.ajax({
  url: "https://api.spark.io/v1/devices/54ff6b066667515129141367/robot", // API key
  data: { "access_token": "a77ab0d36e1778bb188ee681da72534f8db521da", // API access token
          "params": robotInstructions },
  // async: false, // leave this out I guess but we neeed to verify that the recursion will still work
  type: "POST",
  dataType: "json",
  success: function(response){
    // console.log("it worked");
    // console.log(response);
    if((response.error === "Timed out.") && (counter < 3)){
      console.log("Trying again.");
      console.log(counter);
      counter++;
      pingRobot(robotInstructions);
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
