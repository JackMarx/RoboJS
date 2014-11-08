function Robot() {
  this.instructions = [];
}

Robot.prototype.turnRight = function(){
  this.instructions.push("R");
};

Robot.prototype.turnLeft = function(){
  this.instructions.push("L");
};

Robot.prototype.turnBackward = function(){
  this.instructions.push("B");
};

Robot.prototype.moveForward = function(amt){
  this.instructions.push("F"+amt);
};

Robot.prototype.serializedInstructions = function() {
  return this.instructions.join(",");
};
