Challenge.create!(title: "Intro to JavaScript",
                  description: "JavaScript is a dynamic computer language used for talking over the Internet. In this challenge, you'll learn how to use a simple function.\n\nWe've built a robot for you. His name is Rupert. Say hi! Rupert knows how to respond to a select few functions: moveForward();, turnLeft();, and turnRight();\n\nChoosing from the above commands, see if you can get Rupert to move forward.",
                  tutorial: "",
                  hint: "Try one of these: rupert.turnRight(); rupert.turnLeft(); rupert.moveForward();")

Challenge.create!(title: "Going the Distance",
                  description: "Awesome! Now, if you want Rupert to move more than a foot forward, you can call the same moveForward(); more than once.",
                  tutorial: "",
                  hint: "Try one of these: rupert.turnRight(); rupert.turnLeft(); rupert.moveForward();")

Challenge.create!(title: "Argue with Me",
                  description: "It's a little tedious writing that function over and over, right? We can make the same thing happen by passing an argument to the moveForward(); function.\n\nYou might know an argument as an unpleasant shouting match between two people, but in JavaScript-land, it only means something you put between the parentheses at the end of the function.\n\nFor example, if you type rupert.moveForward(2);, Rupert will move forward twice.",
                  tutorial: "",
                  hint: "Try one of these: rupert.turnRight(); rupert.turnLeft(); rupert.moveForward();")

Challenge.create!(title: "Defeating the Zoolander Curse",
                  description: "Great! Now that Rupert has moved forward, let's see if we can get him to turn left before moving forward again.",
                  tutorial: "",
                  hint: "Try one of these: rupert.turnRight(); rupert.turnLeft(); rupert.moveForward();")

Challenge.create!(title: "It's Hip to be Square",
                  description: "Fantastic! Using the same commands you already know, let's see if you can make Rupert make a square. Start by moving forward then turning left, then repeat.",
                  tutorial: "",
                  hint: "Try one of these: rupert.turnRight(); rupert.turnLeft(); rupert.moveForward();")

Challenge.create!(title: "Loop around the Rosy",
                  description: "WOW, that sure was tedious! But as you may have realized, you can't say rupert.moveForward(4);, rupert.turnLeft(); and expect him to move in a square. Instead, Rupert moves forward four times before he turns!\n\nComputers are really good at processing complex instructions but really bad at inferring meaning from your commands. What can I say, they're not perfect.\n\nFortunately, there is a way around this: Introducing the FOR loop.\n\nType this: for (var i=1; i<5; i++) {\nrupert.moveForward(); rupert.turnLeft();\n}",
                  tutorial: "",
                  hint: "Try one of these: rupert.turnRight(); rupert.turnLeft(); rupert.moveForward();")
