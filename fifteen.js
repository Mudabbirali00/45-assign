"use strict";
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list
let people = ["Mubashir Ali", "Junaid Ali", "Zayn Ali"];
let not_coming = people[2];
console.log(not_coming + " " + " is Unable To Attend Dinner");
let new_person = "Ateeb";
people[people.indexOf(not_coming)] = new_person;
people.forEach(newone => {
    console.log(`Dear, ${newone} I invite you to come on my dinner`);
});
// unable to attend Zayn ali
