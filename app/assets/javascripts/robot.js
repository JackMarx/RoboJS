function Robot() {
  this.instructions = [];
  this.fullInstructions = [];
  this.resetInstructions = [];
  this.resetFullInstructions = [];
}

Robot.prototype.turnRight = function(){
  this.fullInstructions.push("robot.turnRight();");
  this.resetFullInstructions.push("robot.turnLeft();");
  this.instructions.push("R");
  this.resetInstructions.push("L");
};

Robot.prototype.turnLeft = function(){
  this.fullInstructions.push("robot.turnLeft();");
  this.resetFullInstructions.unshift("robot.turnRight();");
  this.instructions.push("L");
  this.resetInstructions.unshift("R");
};

Robot.prototype.moveForward = function(amt){
  if(typeof amt === "undefined" || typeof amt === "string") amt = 1 ;
  for(var i=1;i<=amt;i++){
    this.fullInstructions.push("robot.moveForward();");
    this.resetFullInstructions.unshift("robot.moveBackward();");
    this.instructions.push("F");
    this.resetInstructions.unshift("B");
  }
};

Robot.prototype.moveBackward = function(amt){
  if(typeof amt === "undefined" || typeof amt === "string") amt = 1 ;
  for(var i=1;i<=amt;i++){
    this.fullInstructions.push("robot.moveBackward();");
    this.resetFullInstructions.unshift("robot.moveForward();");
    this.instructions.push("B");
    this.resetInstructions.unshift("F");
  }
};

Robot.prototype.serializedInstructions = function() {
  this.instructions.push("S");
  return this.instructions.join("");
};

Robot.prototype.reverseCommands = function(){
  this.fullInstructions.push("robot.reverseCommands();");
};
