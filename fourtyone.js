"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Harry", "Criss", "David"];
function show_magicians1(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
// calling function
show_magicians(magicians);
