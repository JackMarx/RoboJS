function Robot() {
  this.instructions = [];
  this.fullInstructions = [];
}

Robot.prototype.turnRight = function(){
  this.fullInstructions.push("robot.turnRight();");
  this.resetFullInstructions.push("robot.turnLeft();");
  this.instructions.push("R");
  this.resetInstructions.push("L");
};

Robot.prototype.turnLeft = function(){
  this.fullInstructions.push("robot.turnLeft();");
  this.resetFullInstructions.push("robot.turnRight();");
  this.instructions.push("L");
  this.resetInstructions.push("R");
};

Robot.prototype.moveForward = function(amt){
  if(typeof amt === "undefined" || typeof amt === "string") amt = 1 ;
  for(var i=1;i<=amt;i++){
    this.fullInstructions.push("robot.moveForward();");
    this.resetFullInstructions.push("robot.moveBackward();");
    this.instructions.push("F");
    this.resetInstructions.push("B");
  }
};

Robot.prototype.moveBackward = function(amt){
  if(typeof amt === "undefined" || typeof amt === "string") amt = 1 ;
  for(var i=1;i<=amt;i++){
    this.fullInstructions.push("robot.moveBackward();");
    this.resetFullInstructions.push("robot.moveForward();");
    this.instructions.push("B");
    this.resetInstructions.push("F");
  }
};

Robot.prototype.serializedInstructions = function() {
  this.instructions.push("S");
  return this.instructions.join(",");
};

Robot.prototype.resetPosition = function(){
  this.fullInstructions.push("robot.resetPosition();");
};
