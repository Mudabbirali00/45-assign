"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians1 = ["Harry", "Criss", "David"];
function show_magicians(magicians1) {
    magicians1.forEach(magician => {
        console.log(`${magician}`);
    });
}
function make_great(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = "The Great " + magicians1[i];
    }
}
// calling function
make_great(magicians1);
show_magicians(magicians1);
