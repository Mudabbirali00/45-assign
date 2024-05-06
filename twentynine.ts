// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["Apple", "Pomegrenate", "Mango"]

if(favorite_fruits.includes("Apple")){
    console.log("you really like Apple's!")
}
if(favorite_fruits.includes("Pomegrenate")){
    console.log("You really like Pomegrenate's!")
}
if(favorite_fruits.includes("Mango")){
    console.log("You really like Mango's!")
}
if(favorite_fruits.includes("Banana's")){
    console.log("You really like Banana's!")
}
else{
    console.log("Banana is not in the array")
}
if(favorite_fruits.includes("chikoo")){
    console.log("You really like Chikoo!")
}
else{
    console.log("Chikoo is not in the array")
}