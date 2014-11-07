function Robot() {
  this.instructions = [];
}

Robot.prototype.turnRight = function(){
  this.instructions.push("turnRight");
};

Robot.prototype.turnLeft = function(){
  this.instructions.push("turnLeft");
};

Robot.prototype.moveForward = function(){
  this.instructions.push("moveForward");
};

Robot.prototype.moveBackward = function(){
  this.instructions.push("moveBackward");
};
