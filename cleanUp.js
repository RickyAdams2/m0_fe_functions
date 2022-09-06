// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?")
}

nameQuestion();
// I added a semi-colon to the end of the end of the line that invokes the function.
//I did this because adding a semi-colon to the end of an invoked function
//is the proper Syntax form.


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// In this example, I also added another semi-colon behind "third"
// in the second line of code. I did this because semi-colons help us seperate
//lines of code.


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}
  //I spelled out the "function" keyword because "func" wasn't be recognized as a command.
  //I also made a space between the ending parenthesis and he curly bracket in line one.
  //I did this so that the line of code in the curly brackets was seperate from the function.
  //This is also proper syntax formation. I also went ahead and moved the curly bracket to the next line to continue
  //following proper syntax formation

makeFreshPesto();


//  EX 4:
function average(num1, num2)
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}`)
  }
  average(6, 3)

// When I copied this snippet of code in Replit, it responded w a Synatx error. When I removed the dot after '${avg}' in Replit,
// the function was then excepted and I didn't recieve a message after running the code again. So I removed the dot here. I'm
// not completely sure why that mattered, but my inference is that the dot already serves a purpose like in 'console.log' that doesn't
//allow for it to be used differently.
