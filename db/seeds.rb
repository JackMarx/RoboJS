Challenge.create!(title: "Intro to JavaScript",
                  description: "<p>JavaScript is a dynamic computer language used for talking over the Internet. In this challenge, you'll learn how to use a simple function.</p><p>We've built a robot for you. His name is Rupert. Say hi! Rupert knows how to respond to a select few functions: <code>moveForward();</code>, <code>turnLeft();</code>, and <code>turnRight();</code></p><p>Choosing from the above commands, see if you can get Rupert to move forward.</p>",
                  tutorial: "",
                  hint: "Try one of these:<br><code>rupert.turnRight();</code><br><code>rupert.turnLeft();</code><br><code>rupert.moveForward();</code><br><code>rupert.moveBackward();</code>")

Challenge.create!(title: "Going the Distance",
                  description: "<p>Awesome! Now, if you want Rupert to move more than a foot forward, you can call the same <code>moveForward();</code> more than once.</p>",
                  tutorial: "",
                  hint: "Try one of these:<br><code>rupert.turnRight();</code><br><code>rupert.turnLeft();</code><br><code>rupert.moveForward();</code><br><code>rupert.moveBackward();</code>")

Challenge.create!(title: "Argue with Me",
                  description: "<p>It's a little tedious writing that function over and over, right? We can make the same thing happen by passing an argument to the <code>moveForward();</code> function.</p><p>You might know an argument as an unpleasant shouting match between two people, but in JavaScript-land, it only means something you put between the parentheses at the end of the function.</p><p>For example, if you type <code>rupert.moveForward(2);</code>, Rupert will move forward twice.</p>",
                  tutorial: "",
                  hint: "Try one of these:<br><code>rupert.turnRight();</code><br><code>rupert.turnLeft();</code><br><code>rupert.moveForward();</code><br><code>rupert.moveBackward();</code>")

Challenge.create!(title: "Defeating the Zoolander Curse",
                  description: "<p>Great! Now that Rupert has moved forward, let's see if we can get him to turn left before moving forward again.",
                  tutorial: "",
                  hint: "Try one of these:<br><code>rupert.turnRight();</code><br><code>rupert.turnLeft();</code><br><code>rupert.moveForward();</code><br><code>rupert.moveBackward();</code>")

Challenge.create!(title: "It's Hip to be Square",
                  description: "<p>Fantastic! Using the same commands you already know, let's see if you can make Rupert make a square. Start by moving forward then turning left, then repeat.</p>",
                  tutorial: "",
                  hint: "Try one of these:<br><code>rupert.turnRight();</code><br><code>rupert.turnLeft();</code><br><code>rupert.moveForward();</code><br><code>rupert.moveBackward();</code>")

Challenge.create!(title: "Loop around the Rosy",
                  description: "<p>WOW, that sure was tedious! But as you may have realized, you can't say <code>rupert.moveForward(4);</code>, <code>rupert.turnLeft();</code> and expect him to move in a square. Instead, Rupert moves forward four times before he turns!</p><p>Computers are really good at processing complex instructions but really bad at inferring meaning from your commands. What can I say, they're not perfect.</p><p>Fortunately, there is a way around this: Introducing the FOR loop.</p><p>Type this:<br><code>for(var i=1; i<5; i++){</code><br><code>&nbsp;&nbsp;rupert.moveForward();<br>&nbsp;&nbsp;rupert.turnLeft();</code><br><code>}</code></p>",
                  tutorial: "",
                  hint: "Try one of these:<br><code>rupert.turnRight();</code><br><code>rupert.turnLeft();</code><br><code>rupert.moveForward();</code><br><code>rupert.moveBackward();</code>")
