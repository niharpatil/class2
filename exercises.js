/*
Complete the following function that converts between fahrenheight and celsius. The two equations you need are  c = (f − 32) × 0.55 and f = c × 1.8 + 32. The function takes in two parameters:
- temperature, which is either a Fahrenheight or Celsius number
- fOrC, which is either "Fahrenheight" or "Celsius"

For example, when someone writes convertTemperature(40, "Fahrenheight"), the function should return the celsius value of 40 degrees Fahreheight.
*/

function convertTemperature(temperature, fOrC) {
  if (fOrC === "Fahrenheit") {
    temperature = (temperature - 32) * .55;
    return temperature;
    console.log(temperature);
  } else if (forOrC === "Celcius") {
    temperature = (temperature * 1.8) + 32
    return temperature;
    console.log(temperature);
  } else {
    console.log("put Fahrenheit or Celcius.");
  }
}

convertTemperature(56, "Fahrenheit");

/*
Complete the following function that returns the area of a triangle
*/

function areaOfTriangle(base, height) {
  return base * height * .5
}

// String problems

/*
Complete the following function that returns true if the two strings str1 and str2 are equal. If they are not equal, the function should return false.
*/

function stringsAreEqual(str1, str2) {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

/*
Complete the function that takes two strings, places a space between them, and returns the new string. 
For example, if str1 is "hello" and str2 is "world", this function should return "hello world" (notice the space between str1 and str2).
*/

function putTwoStringsTogether(str1, str2) {
  return str1 + " " + str2;
}


// Array problems


/*
Though we did this in class, I think it's useful to try and do it again by yourself. Complete the following function that replace every word "HAM" in the array greenEggsAndHam with the world "BROCOLLI". Make sure the function replaceHamWithBrocolli returns the array with "HAM" replaced.
*/

var greenEggsAndHam = require('./greenEggsAndHam')
// You can write console.log(greenEggsAndHam) to see whats inside of the array

function replaceHamWithBrocolli(greenEggsAndHam) {
  for (var i = 0; i < greenEggsAndHam.length; i++) {
    if (greenEggsAndHam[i] === "HAM") {
      greenEggsAndHam[i] = "BROCOLLI";
    }
  }
  return greenEggsAndHam
}

/*
Remember the push() function? As a refresher, we can use it to add new values to an existing array.

For example, if we have the array things = [], we can add items to the things array by writing things.push("a string"). 

Complete the following function that returns an array containing the string "uma is awesome" 100 times. You should try to use the push() function and a for-loop.

Remember that for-loops look like this
for(var i = 0; i < 5; i = i + 1) {
  // some code
}
*/

function umaIsAwesome() {
  var arr = new Array();
  for (var i = 0; i < 3; i++) {
    arr.push("Uma is awesome");
  }
  return arr;
}


/*
Complete the following function that adds all elements of the array 'nums' together. Notice that we don't know the length of 'nums' (hint: we can access the length of 'nums' by using nums.length) (another hint: we can look at all the elements in an array by using a for-loop).
*/

function addAllNumbersInArray(nums) {
  for (var i = 0; i < nums.length; i++) {
    var added;
    added = added + nums[i];
    console.log(added);
  }
}

// Function problems

/*
Write a function called returnHi that returns the string "hi"
*/
function returnHi() {
  return "hi";
}

/*
Write a function called addsTwoNumbers that takes in two numbers as inputs (parameters) and returns the sum of them.
*/
function addsTwoNumbers(num, num2) {
  return num + num2;
}

// Object problems

/*
Consider the object below called "person". Complete the following function changeName so that person's firstname is "Jyoti". (remember that we access object properties by doing object.property_name or object['property_name'])
*/

var person = {
  firstname: 'Raj',
  lastname: 'Chandra'
}
person.firstname = "Jyoti";
// This line messed things up
// return person;




/*
Challenge Problem (You can do it! :) 
Lets write a calculator! Complete the following function called "calculate" that takes in three parameters:
- num1 - a number
- operator - a string that is either "+", "-", "*", or "/"
- num2 - a number

Based on the three inputs, calculate should return the calculated value. 

Here are some examples of how we might use calculate. This should help you write the code:
- calculate(1,"+",1) = 2
- calculate(2, "*", 3) = 6
- calculate(3, "-", 3) = 6
- calculate(6, "/", 2) = 3

Hints: 
- Use if statements to determine what operation you should do between num1 and num2
- You can check if you're suppose to add num1 and num2 by writing 
  if (operator === "+") {
    // some code
  }
*/

function calculate(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}


/*
Super Challenge Problem (don't worry if you can't get it): A palindrome is a string that reads the same forwards and backwards. Here are some examples of palindromes:
- "wow"
- "mom"
- "racecar"

Complete the following function, isPalindrome, that should return true if the string input str is a palindrome. If str is not a palindrome, then return false.

Hint: there is a function called "reverse" that yo
*/

function isPalindrome(str) {
  var rev = str.reverse;
  if (rev === str) {
    return true;
    console.log("true");
  } else {
    return false;
    console.log("false");
  }
}
isPalindrome("hi");
isPalindrome("bob");


// Don't worry about the code below this line
console.log(umaIsAwesome)
module.exports = {
  convertTemperature,
  areaOfTriangle,
  stringsAreEqual,
  putTwoStringsTogether,
  replaceHamWithBrocolli,
  umaIsAwesome,
  addAllNumbersInArray,
  returnHi: returnHi ? returnHi : function () { },
  addsTwoNumbers: addsTwoNumbers ? addsTwoNumbers : function () { },
  calculate,
  isPalindrome,
}