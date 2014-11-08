FACING = ["up", "left", "down", "right"]

function DrawnRobot(){
  this.body = new fabric.Rect({
  left: 230,
  top: 390,
  fill: 'red',
  width: 20,
  height: 20,
  originX: 'center',
  originY: 'center' });
  this.facing =  FACING[0]
}

DrawnRobot.prototype.turnLeft = function(){
  this.body.animate('angle', 90, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
  });
  facingIndex = FACING.indexOf(this.facing)
  facingIndex += 1
  if (facingIndex === 4) {
      facingIndex = 0
  }
  this.facing = FACING[facingIndex]
  console.log(this.facing)
};

DrawnRobot.prototype.turnRight = function(){
  this.body.animate('angle', -90, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
  });
  facingIndex = FACING.indexOf(this.facing)
  facingIndex -= 1
  if (facingIndex === -1) {
      facingIndex = 3
  }
  this.facing = FACING[facingIndex]
  console.log(this.facing)
};

DrawnRobot.prototype.turnBackward = function(){
  this.body.animate('angle', 180, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
  });
  facingIndex = FACING.indexOf(this.facing)
  facingIndex += 2
    if (facingIndex === 4) {
       facingIndex = 0
  } else if (facingIndex === 5) {
         facingIndex = 1
  } else {
      facingIndex
  }
  this.facing = FACING[facingIndex]
  console.log(this.facing)
};

DrawnRobot.prototype.moveForward = function(){
  this.body.animate('angle', 180, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
  });
  facingIndex = FACING.indexOf(this.facing)
  facingIndex += 2
    if (facingIndex === 4) {
       facingIndex = 0
  } else if (facingIndex === 5) {
         facingIndex = 1
  } else {
      facingIndex
  }
  this.facing = FACING[facingIndex]
  console.log(this.facing)
};








$(document).ready(function(){
  canvas = new fabric.Canvas('myCanvas');
  drawnRobot = new DrawnRobot();
  canvas.add(drawnRobot.body);
  // drawnRobot.turnLeft();
  // drawnRobot.turnLeft();
  // drawnRobot.turnLeft();
  // drawnRobot.turnLeft();
  // drawnRobot.turnRight();
  // drawnRobot.turnRight();
  // drawnRobot.turnRight();
  // drawnRobot.turnRight();
  // drawnRobot.turnBackward();
});

