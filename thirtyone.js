"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// make sure the list is not empty
let my_friends = ["Mubashir", "Junaid", "Ateeb"];
if (my_friends.length > 0) {
    // initialization
    for (let friends of my_friends)
        console.log("friend: " + friends);
}
else {
    console.log("We need to find some users!");
}
// creating empty list 
let nullArray = [];
if (nullArray.length > 0) {
    // initialization
    for (let empty of nullArray)
        console.log("empty: " + empty);
}
else {
    console.log("We need to find some users!");
}
