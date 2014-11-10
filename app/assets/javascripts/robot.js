function Robot() {
  this.instructions = [];
  this.fullInstructions = [];
}

Robot.prototype.turnRight = function(){
  this.fullInstructions.push("robot.turnRight();");
  this.instructions.push("R");
};

Robot.prototype.turnLeft = function(){
  this.fullInstructions.push("robot.turnLeft();");
  this.instructions.push("L");
};

Robot.prototype.moveForward = function(amt){
  if(typeof amt === "undefined" || typeof amt === "string") amt = 1 ;
  for(var i=1;i<=amt;i++){
    this.fullInstructions.push("robot.moveForward();");
    this.instructions.push("F");
  }
};

Robot.prototype.turnAround = function(){
  this.fullInstructions.push("robot.turnRight();");
  this.fullInstructions.push("robot.turnRight();");
  this.instructions.push("R");
  this.instructions.push("R");
};

Robot.prototype.serializedInstructions = function() {
  this.instructions.push("S");
  return this.instructions.join(",");
};
