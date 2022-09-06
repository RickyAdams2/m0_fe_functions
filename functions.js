// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called.
//Call this function 3 times.
function printGreeting () {
  console.log( "What's up darling")
}
printGreeting();
printGreeting();
printGreeting();


// 2: Write a function that accepts 1 argument.
//The function should console.log a sentence that interpolates the data passed in.
function washDog(dogName) {
  console.log(`I need to wash ${dogName} this evening`)
};
washDog("Jeremy");



// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a
//company, and the numbers will represent the minimum and maximum of a pay range for a posted job.
//The function should print out a sentence that includes the name of the company and the range itself
//(if the numbers passed in are 90000 and 110000, the pay range is 20000).
function companyPayRange(companyName, payRange1, payRange2) {
  var sum = payRange2 - payRange1;
  console.log(`Welcome to the ${companyName}. Our starting salary range is ${sum}. We are so glad to have you joining our team.`)
};
companyPayRange("Big Bay Inc.", 150000, 200000);




// 4: Write a function that satifies the following interaction pattern:
function checkStock(stock, item) {
  var checkStock = 4
  if (checkStock >= 4)
    console.log(`${item} is stocked.`)
  };
checkStock(4, "Coffee");
// => "Coffee is stocked"

function checkStock(stock, item) {
  var checkStock = 3
  if (checkStock > 0 && checkStock <= 3)
  console.log(`${item} - running LOW`)
};
checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

function checkStock(stock, item) {
  var checkStock = 0
    console.log(`${item} - OUT of stock!`)
};
checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"
function checkStock(stock, item) {
  var checkStock = 1
  if (checkStock > 0 && checkStock <= 3)
    console.log(`${item} - running LOW`)
};
checkStock(1, "Salsa");
// => "Salsa - running LOW"
