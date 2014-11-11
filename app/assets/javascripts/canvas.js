function DrawnRobot(){
  imgElement = document.getElementById('robot-icon');
  this.body = new fabric.Image(imgElement, {
    left: 200,
    top: 390,
    fill: '#006569',
    width: 20,
    height: 20,
    originX: 'center',
    originY: 'center',
    selectable: false,
    crashed: false
  });
  this.facing = 0;
  this.canvas = new fabric.Canvas('myCanvas');
  this.queuedInstructions = [];
}

DrawnRobot.prototype.doTheseFrames = function(instructionsArr){
  this.queuedInstructions = instructionsArr;
};

DrawnRobot.prototype.getNextInstruction = function(){
  var robot = this;
  if(robot.queuedInstructions.length > 0){
    console.log("Number of instructions left: " + robot.queuedInstructions.length);
    eval(robot.queuedInstructions.shift());
  } else {
      $(".game-console-button").show();
      $(".hint-link").show();
      $(".challenge-navigation a").show();
  }
};

DrawnRobot.prototype.turnLeft = function(degrees){
  if(typeof degrees === 'undefined' || typeof degrees === 'string') degrees = 90;
  var canvas = this.canvas;
  var robot = this;
  console.log(degrees);
  robot.facing -= degrees;
  canvasData = {
    duration: 1500,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function(){
      robot.getNextInstruction();
    }
  };
  this.body.animate('angle', '-=' + degrees.toString(), canvasData);
  console.log(robot.facing);
};

DrawnRobot.prototype.turnRight = function(degrees){
  if(typeof degrees === 'undefined' || typeof degrees === 'string') degrees = 90;
  var robot = this;
  var canvas = this.canvas;
  robot.facing += degrees;
  canvasData = {
    duration: 1500,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function(){
      robot.getNextInstruction();
    }
  };
  this.body.animate('angle', '+='+ degrees.toString(), canvasData);
};

DrawnRobot.prototype.moveForward = function(amt){
  if(typeof amt === 'undefined' || typeof amt === 'string') amt = 1;
  var distance, line, robot, canvas, canvasData;
  robot = this;
  canvas = robot.canvas;
  canvasData = {
    onChange: function(){
      if (robot.body.top >= 400){
        robot.upInSmoke("bottom");
      }else if(robot.body.top <= 0){
        robot.upInSmoke("top");
      }else if(robot.body.left >= 400){
        robot.upInSmoke("right");
      }else if(robot.body.left <= 0){
        robot.upInSmoke("left");
      }
    canvas.renderAll.bind(canvas);
  },
  abort: function(){
    return robot.crashed;
  },
  duration: 1500,
  onComplete: function(){
      robot.getNextInstruction();
    }
  };
  canvasLineData = { onChange: canvas.renderAll.bind(canvas),
    duration: 1500,
     onComplete: function(){
    }
  };
  distance = amt * 50;
  line = robot.lineTrail();
  canvas.add(line);
  canvas.sendToBack(line);
  if (robot.facing === 0) {
    robot.body.animate('top', '-=' + distance.toString(), canvasData);
    line.animate('height', '-=' + distance.toString(), canvasLineData);
  } else if (robot.facing === -90) {
      robot.body.animate('left', '-=' + distance.toString(), canvasData);
      line.animate('width', '-=' + distance.toString(), canvasLineData);
  } else if (robot.facing === "down") {
      robot.body.animate('top', '+=' + distance.toString(), canvasData);
      line.animate('height', '+=' + distance.toString(), canvasLineData);
  } else if (robot.facing === 90) {
      robot.body.animate('left', '+=' + distance.toString(), canvasData);
      line.animate('width', '+=' + distance.toString(), canvasLineData);
  }
};

DrawnRobot.prototype.lineTrail = function() {
    var line = new fabric.Line([ this.body.left - 3, this.body.top -3, this.body.left -3, this.body.top - 3], {
      stroke: '#006569',
      strokeWidth: 5,
      strokeDashArray: [5, 5],
      selectable: false,
      lockMovementY: true,
      lockMovementX: true
  });
  return line;
};

DrawnRobot.prototype.upInSmoke = function(edge){
  var robot = this;
  var smokeTop, smokeSide;
  if(edge === "top"){
    smokeTop = robot.body.top + 12;
    smokeSide = robot.body.left;
  }else if(edge === "left"){
    smokeTop = robot.body.top;
    smokeSide = robot.body.left + 12;
  }else if(edge === "bottom"){
    smokeTop = robot.body.top - 12;
    smokeSide = robot.body.left;
  }else if(edge === "right"){
    smokeTop = robot.body.top;
    smokeSide = robot.body.left - 12;
  }
  robot.canvas.remove(robot.body);
  imgElement = document.getElementById('cloud');
  smoke = new fabric.Image(imgElement, {
    left: smokeSide,
    top: smokeTop,
    fill: '#006569',
    width: 28,
    height: 28,
    originX: 'center',
    originY: 'center',
    selectable: false,
    evented: false
  });
  robot.canvas.add(smoke);
  robot.crashed = true;
  alert("Try Again!");
};

// FACING = ["up", "left", "down", "right"];

// DrawnRobot.prototype.setFacingRight = function(){
//   facingIndex = FACING.indexOf(this.facing);
//   facingIndex -= 1;
//   if (facingIndex === -1) {
//       facingIndex = 3;
//   }
//   this.facing = FACING[facingIndex];
// };

// DrawnRobot.prototype.setFacingLeft = function(){
  // facingIndex = FACING.indexOf(this.facing);
  // facingIndex += 1;
  // if (facingIndex === 4) {
  //     facingIndex = 0;
  // }
  // this.facing = FACING[facingIndex];
  // console.log(this.facing);
// };
