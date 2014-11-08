challenge1 = Challenge.create!(title: "Intro to JavaScript",
                               description: "<p>JavaScript is a dynamic computer language used for talking over the Internet. In this challenge, you'll learn how to use a simple function.</p><p>We've built a robot for you. His name is Rupert. Say hi! Rupert knows how to respond to a select few functions: moveForward();, turnLeft();, and turnRight();</p><p>Choosing from the above commands, see if you can get Rupert to move forward.</p>",
                               tutorial: "",
                               solution: "rupert.moveForward();",
                               hint: "Try one of these: rupert.moveRight();, rupert.moveLeft();, rupert.moveForward();")

challenge2 = Challenge.create!(title: "Going the Distance",
                               description: "<p>Awesome! Now, if you want Rupert to move more than a foot forward, you can call the same moveForward(); more than once.</p>",
                               tutorial: "",
                               solution: "rupert.moveForward();,rupert.moveForward();",
                               hint: "Try one of these: rupert.moveRight();, rupert.moveLeft();, rupert.moveForward();")

challenge3 = Challenge.create!(title: "Argue with Me",
                               description: "<p>It's a little tedious writing that argument over and over, right? We can make the same thing happen by passing an argument to the moveForward(); function.</p><p>You might know an argument as an unpleasant shouting match between two people, but in JavaScript-land, it only means something you put between the parentheses at the end of the function.</p><p>For example, if you type rupert.moveForward(2);, Rupert will move forward twice.</p>",
                               tutorial: "",
                               solution: "rupert.moveForward(2);",
                               hint: "Try one of these: rupert.moveRight();, rupert.moveLeft();, rupert.moveForward();")

challenge4 = Challenge.create!(title: "Defeating the Zoolander Curse",
                               description: "<p>Great! Now that Rupert has moved forward, let's see if we can get him to turn left before moving forward again.</p>",
                               tutorial: "",
                               solution: "rupert.turnLeft();,rupert.moveForward();",
                               hint: "Try one of these: rupert.moveRight();, rupert.moveLeft();, rupert.moveForward();")

challenge5 = Challenge.create!(title: "It's Hip to be Square",
                               description: "<p>Fantastic! Using the same commands you already know, let's see if you can make Rupert make a square.</p>",
                               tutorial: "",
                               solution: "rupert.turnLeft();,rupert.moveForward(),;rupert.turnLeft();,rupert.moveForward();,rupert.turnLeft();,rupert.moveForward();,rupert.turnLeft();,rupert.moveForward();",
                               hint: "Try one of these: rupert.moveRight();, rupert.moveLeft();, rupert.moveForward();")

challenge6 = Challenge.create!(title: "Loop around the Rosy",
                               description: "<p>WOW, that sure was tedious! But as you may have realized, you can't say rupert.moveForward(4);, rupert.turnLeft(); and expect him to move in a square. Instead, Rupert moves forward four times before he turns!</p><p>Computers are really good at processing complex instructions but really bad at inferring meaning from your commands. What can I say, they're not perfect.</p><p>Fortunately, there is a way around this: Introducing the FOR loop.</p><p>Type this:for(var i=1;i<4;i++){<br>rupert.moveForward();rupert.turnLeft();<br>}",
                               tutorial: "",
                               solution: "for(var i=1;i<4;i++){\n\rrupert.moveForward();rupert.turnLeft();\n\r}",
                               hint: "Try one of these: rupert.moveRight();, rupert.moveLeft();, rupert.moveForward();")
