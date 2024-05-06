// found a big dinning table
let guestlist2 : string[] = ["Mubashir Ali", "Junaid Ali", "Zayn Ali"]

let not_coming3= guestlist2[2]
console.log(not_coming3 + " " + " is Unable To Attend Dinner")

let new_person3 : string = "Ateeb" 

guestlist2[guestlist2.indexOf(not_coming3)]=new_person3

// add a person at the begining of the array
let person7 = "Saad Ahmed"
guestlist2.unshift(person7)
console.log(guestlist2)

// add a person at the middle of the array

let person8 = "Asad Ali"
let index2 = guestlist2.length/2
guestlist2.splice(index2,0,person8)
console.log(guestlist2)

// add a person at the end of the Array

let person9 = "zuhaib ali"
guestlist2.push(person9)
console.log(guestlist2)

// print a new message to them 

// guestlist2.forEach(person =>{
//     console.log(`Dear, ${person} I found a bigger dining table so i invited you also.`)
// });

console.log(guestlist2.length, " "  + "guests", "are invited to a dinner")




