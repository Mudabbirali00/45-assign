// found a big dinning table
let guestlist : string[] = ["Mubashir Ali", "Junaid Ali", "Zayn Ali"]

let not_coming1= guestlist[2]
console.log(not_coming1 + " " + " is Unable To Attend Dinner")

let new_person1 : string = "Ateeb" 

guestlist[guestlist.indexOf(not_coming1)]=new_person1

// add a person at the begining of the array
let person1 = "Saad Ahmed"
guestlist.unshift(person1)
console.log(guestlist)

// add a person at the middle of the array

let person2 = "Asad Ali"
let index = guestlist.length/2
guestlist.splice(index,0,person2)
console.log(guestlist)

// add a person at the end of the Array

let person3 = "zuhaib ali"
guestlist.push(person3)
console.log(guestlist)

// print a new message to them 

guestlist.forEach(person =>{
    console.log(`Dear, ${person} I found a bigger dining table so i invited you also.`)
})