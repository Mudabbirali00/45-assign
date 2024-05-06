"use strict";
// found a big dinning table
let guestlist1 = ["Mubashir Ali", "Junaid Ali", "Zayn Ali"];
let not_coming2 = guestlist1[2];
console.log(not_coming2 + " " + " is Unable To Attend Dinner");
let new_person2 = "Ateeb";
guestlist1[guestlist1.indexOf(not_coming2)] = new_person2;
// add a person at the begining of the array
let person4 = "Saad Ahmed";
guestlist1.unshift(person4);
console.log(guestlist1);
// add a person at the middle of the array
let person5 = "Asad Ali";
let index1 = guestlist1.length / 2;
guestlist1.splice(index1, 0, person5);
console.log(guestlist1);
// add a person at the end of the Array
let person6 = "zuhaib ali";
guestlist1.push(person6);
console.log(guestlist1);
// print a new message to them 
guestlist1.forEach(person => {
    console.log(`Dear, ${person} I found a bigger dining table so i invited you also.`);
});
// first line of EX_17
console.log("sorry i only have 2 seats for dinnner");
// removing guest 
console.log(guestlist1);
while (guestlist1.length > 2) {
    let removingPerson = guestlist1.pop();
    // printing message for those who are not invited
    console.log(`Dear, ${removingPerson} I am sorry i can't invite you for a dinner `);
}
// printing message for those who are still invited
guestlist1.forEach(person => {
    console.log(`Dear, ${person} You are still invited `);
});
// creating empty list
guestlist1.pop();
guestlist1.pop();
console.log(guestlist1);
