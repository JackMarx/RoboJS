FACING = ["up", "left", "down", "right"];

function DrawnRobot(){
  this.instructions = [];
  this.body = new fabric.Triangle({
    left: 230,
    top: 390,
    fill: 'grey',
    width: 20,
    height: 20,
    originX: 'center',
    originY: 'center',
    selectable: false,
  });

  this.facing =  FACING[0];
  this.canvas = new fabric.Canvas('myCanvas');
}

DrawnRobot.prototype.turnLeft = function(){

  var canvas = this.canvas;
  var canvasData = { onChange: canvas.renderAll.bind(canvas), duration: 1000 };
  this.instructions.push("L");
  this.body.animate('angle', '-=90', canvasData);

  facingIndex = FACING.indexOf(this.facing);

  facingIndex += 1;
  if (facingIndex === 4) {
      facingIndex = 0;
  }
  this.facing = FACING[facingIndex];
  // console.log(this.facing);
};

DrawnRobot.prototype.turnRight = function(){
  var canvas = this.canvas;
  var canvasData = { onChange: canvas.renderAll.bind(canvas), duration: 1000 };
  this.instructions.push("R");

  this.body.animate('angle', '+=90', canvasData);

  facingIndex = FACING.indexOf(this.facing);
  facingIndex -= 1;
  if (facingIndex === -1) {
      facingIndex = 3;
  }

  this.facing = FACING[facingIndex];
  // console.log(this.facing);
};

DrawnRobot.prototype.moveForward = function(amt){
  var distance, line, robot, canvas, canvasData;

  if(typeof amt === 'undefined' || typeof amt === 'string') amt = 1;
  for(var i=1;i<=amt;i++){ this.instructions.push("F"); }

  robot = this;
  canvas = robot.canvas;
  canvasData = { onChange: canvas.renderAll.bind(canvas), duration: 1000 };
  distance = amt * 50;
  line = robot.lineTrail();
  canvas.add(line);

  if (robot.facing === "up") {
    robot.body.animate('top', '-=' + distance.toString(), canvasData);

    line.animate('height', '-=' + distance.toString(), canvasData);

  } else if (robot.facing === "left") {
      robot.body.animate('left', '-=' + distance.toString(), canvasData);

      line.animate('width', '-=' + distance.toString(), canvasData);

  } else if (robot.facing === "down") {
      robot.body.animate('top', '+=' + distance.toString(), canvasData);

      line.animate('height', '+=' + distance.toString(), canvasData);

  } else {
      robot.body.animate('left', '+=' + distance.toString(), canvasData);

      line.animate('width', '+=' + distance.toString(), canvasData);
  }

};

DrawnRobot.prototype.serializedInstructions = function() {
  this.instructions.push("S");
  return this.instructions.join(",");
};

DrawnRobot.prototype.lineTrail = function() {
    var line = new fabric.Line([ this.body.left - 3, this.body.top -3, this.body.left -3, this.body.top - 3], {
     stroke: 'grey',
     strokeWidth: 5,
     selectable: false,
     lockMovementY: true,
     lockMovementX: true
  });
  return line;
};

DrawnRobot.prototype.turnBackward = function(){
  var canvas = this.canvas;
  this.body.animate('angle', '-=180', {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000
  });
  facingIndex = FACING.indexOf(this.facing);

  facingIndex += 2;
    if (facingIndex === 4) {
      facingIndex = 0;
  } else if (facingIndex === 5) {
      facingIndex = 1;
  } else {
    return facingIndex;
  }
  this.facing = FACING[facingIndex];
  console.log(this.facing);
};


