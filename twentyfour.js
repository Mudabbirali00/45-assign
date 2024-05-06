"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let name1 = "ateeb";
let name2 = "mudabbir";
// equality and inequality
console.log("Is name2 == 'mudabbir is equal to hi?' i predict true ");
console.log(name2 == "mudabbir");
console.log("Is name1 == 'ateeb is equal to name2?' i predict false");
console.log(name1 == name2);
// • Tests using the lower case function
console.log("Is ateeb == 'is equal to name1 after converting lowercase?' i predict false");
console.log(`${name1}`.toLowerCase() === "ateeb");
let number1 = 12;
let number2 = 5;
// true condition
console.log("Is number1 == 'is equal to 12' i predict true");
console.log(number1 == 12);
//  false condition
console.log("Is number1 == 'is equal to 5' i predict false");
console.log(number1 == number2);
// less than 
console.log("Is number1 == 'is less than number2'i predect true");
console.log(number1 < number2);
//greater than
console.log("Is number1 == 'is gretar than number2' i predict false");
console.log(number1 > number2);
// greater than or equal to
console.log("Is number1 == 'is greater than or equal to 12' i predict true");
console.log(number1 >= 12);
// less than equal to
console.log("Is number1 == ' is less than or equal to 5' i predict true");
console.log(number1 <= 5);
// "and" "or"
let bol1 = true;
let bol2 = false;
console.log("Is bol1 true is bol2 false i predict true ");
console.log(bol1 && bol2);
console.log("Is bol1 true is bol2 false i predict false ");
console.log(bol1 || bol2);
// skip
// item is in array
let arr = ["ateeb", "junaid", "mubashir"];
console.log("Is junaid is in the array?");
console.log(arr.includes("junaid"));
// item is not in array
console.log("Is Zayn is in the Array?");
console.log(arr.includes("Zayn"));
