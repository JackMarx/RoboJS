FACING = ["up", "left", "down", "right"];

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
  });
  this.facing =  FACING[0];
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

  }
};

DrawnRobot.prototype.setFacingRight = function(){
  facingIndex = FACING.indexOf(this.facing);
  facingIndex -= 1;
  if (facingIndex === -1) {
      facingIndex = 3;
  }
  this.facing = FACING[facingIndex];
};

DrawnRobot.prototype.setFacingLeft = function(){
  facingIndex = FACING.indexOf(this.facing);
  facingIndex += 1;
  if (facingIndex === 4) {
      facingIndex = 0;
  }
  this.facing = FACING[facingIndex];
  console.log(this.facing);
};

DrawnRobot.prototype.turnLeft = function(){
  var canvas = this.canvas;
  var robot = this;
  robot.setFacingLeft();
  canvasData = {
    duration: 1500,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function(){
      robot.getNextInstruction();
    }
  };
  this.body.animate('angle', '-=90', canvasData);
};

DrawnRobot.prototype.turnRight = function(){
  var robot = this;
  var canvas = this.canvas;
  robot.setFacingRight();
  canvasData = {
    duration: 1500,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function(){

      robot.getNextInstruction();
    }
  };
  this.body.animate('angle', '+=90', canvasData);
  // console.log(this.facing);
};

DrawnRobot.prototype.moveForward = function(amt){
  if(typeof amt === 'undefined' || typeof amt === 'string') amt = 1;
  var distance, line, robot, canvas, canvasData;
  robot = this;
  canvas = robot.canvas;
  canvasData = { onChange: canvas.renderAll.bind(canvas),
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
  if (robot.facing === "up") {
    robot.body.animate('top', '-=' + distance.toString(), canvasData);

    line.animate('height', '-=' + distance.toString(), canvasLineData);

  } else if (robot.facing === "left") {
      robot.body.animate('left', '-=' + distance.toString(), canvasData);

      line.animate('width', '-=' + distance.toString(), canvasLineData);

  } else if (robot.facing === "down") {
      robot.body.animate('top', '+=' + distance.toString(), canvasData);

      line.animate('height', '+=' + distance.toString(), canvasLineData);

  } else {
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

// DrawnRobot.prototype.turnAround = function(){
//   var canvas = this.canvas;
//   var robot = this;

//   this.body.animate('angle', '-=180', {
//     onChange: canvas.renderAll.bind(canvas),
//     duration: 1000,
//     onComplete: function() { robot.getNextInstruction(); }
//   });


//   facingIndex = FACING.indexOf(this.facing);

//   facingIndex += 2;
//     if (facingIndex === 4) {
//       facingIndex = 0;
//   } else if (facingIndex === 5) {
//       facingIndex = 1;
//   } else {
//     return facingIndex;
//   }
//   this.facing = FACING[facingIndex];
//   console.log(this.facing);
// };




