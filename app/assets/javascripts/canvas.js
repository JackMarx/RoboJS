$(document).ready(function(){

FACING = ["up", "left", "down", "right"];


function DrawnRobot(){
  this.body = new fabric.Triangle({
  left:30,
  top: 390,
  fill: 'red',
  width: 20,
  height: 20,
  originX: 'center',
  originY: 'center' });
  this.facing =  FACING[0];
}



DrawnRobot.prototype.turnLeft = function(){
  this.body.animate('angle', '-=90', {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
  });
  facingIndex = FACING.indexOf(this.facing);
  facingIndex += 1;
  if (facingIndex === 4) {
      facingIndex = 0;
  }
  this.facing = FACING[facingIndex];
  console.log(this.facing);


};

DrawnRobot.prototype.turnRight = function(){
  this.body.animate('angle', '+=90', {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
  });
  facingIndex = FACING.indexOf(this.facing);
  facingIndex -= 1;
  if (facingIndex === -1) {
      facingIndex = 3;
  }
  this.facing = FACING[facingIndex];
  console.log(this.facing);
};


DrawnRobot.prototype.turnBackward = function(){
  this.body.animate('angle', '-=180', {
    onChange: canvas.renderAll.bind(canvas),
    duration: 1000,
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

DrawnRobot.prototype.moveForward = function(amt){
  var distance, line;
  var robot = this;
  setTimeout(function(){
    if (robot.facing === "up") {
      distance = amt * 50;
      robot.body.animate('top', '-=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
      line = new fabric.Line([ robot.body.left, robot.body.top, robot.body.left, robot.body.top], {
        stroke: 'red',
        strokeWidth: 5,
        selectable: false,
        lockMovementY :true,
        lockMovementX :true
      });
    canvas.add(line);
    line.animate('height', '-=' + distance.toString(), {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000,
    });
  } else if (robot.facing === "left") {
      distance = amt * 50;
      robot.body.animate('left', '-=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
      line = new fabric.Line([ robot.body.left, robot.body.top, robot.body.left, robot.body.top], {
        stroke: 'red',
        strokeWidth: 5,
        selectable: false,
        lockMovementY :true,
        lockMovementX :true
      });
      canvas.add(line);
      line.animate('width', '-=' + distance.toString(), {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000,
    });

  } else if (robot.facing === "down") {
      distance = amt * 50;
      robot.body.animate('top', '+=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
      line = new fabric.Line([ robot.body.left, robot.body.top, robot.body.left, robot.body.top], {
        stroke: 'red',
        strokeWidth: 5,
        selectable: false,
        lockMovementY :true,
        lockMovementX :true
      });
      canvas.add(line);
      line.animate('height', '+=' + distance.toString(), {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000,
    });

  } else {
      distance = amt * 50;
      robot.body.animate('left', '+=' + distance.toString(), {
        onChange: canvas.renderAll.bind(canvas),
        duration: 1000,
      });
     line = new fabric.Line([ robot.body.left, robot.body.top, robot.body.left, robot.body.top], {
        stroke: 'red',
        strokeWidth: 5,
        selectable: false,
        lockMovementY :true,
        lockMovementX :true
      });
      canvas.add(line);
      line.animate('width', '+=' + distance.toString(), {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000,
    });
  }
  }, 1000);
};



// test code
  canvas = new fabric.Canvas('myCanvas');
  drawnRobot = new DrawnRobot();
  canvas.add(drawnRobot.body);
  drawnRobot.turnLeft();
  drawnRobot.moveForward(2);
  // drawnRobot.turnBackward();
  // drawnRobot.turnBackward();
  // drawnRobot.moveForward(2);


});


