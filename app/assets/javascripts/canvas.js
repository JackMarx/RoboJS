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

DrawnRobot.prototype.moveForward = function(amt){
    console.log(this.body.left)
    console.log(this.body.top)
    if (this.facing === "up") {
      var distance = amt * 50
      this.body.animate('top', '-=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
  } else if (this.facing === "left") {
      var distance = amt * 50
      this.body.animate('left', '-=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
  } else if (this.facing === "down") {
      var distance = amt * 50
      this.body.animate('top', '+=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
  } else {
      var distance = amt * 50
      this.body.animate('left', '+=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
  }
};

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





$(document).ready(function(){
  canvas = new fabric.Canvas('myCanvas');
  drawnRobot = new DrawnRobot();
  canvas.add(drawnRobot.body);
  console.log(drawnRobot.body.left)
  console.log(drawnRobot.body.top)
  drawnRobot.moveForward(2);
  // drawnRobot.turnBackward();
  // drawnRobot.turnBackward();
  // drawnRobot.moveForward(2);
 var line = new fabric.Line([ 250, 125, 250, 175 ], {
      angle : 90,
      fill: 'red',
      stroke: 'red',
      strokeWidth: 5,
      selectable: false
    });
    canvas.add(line);
});


