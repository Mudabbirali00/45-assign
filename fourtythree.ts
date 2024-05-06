// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians2(magicians2 : string[]): void{
    magicians2.forEach(magician => {
        console.log(`${magician}`)
        
    });
}

function make_great2(magicians2 : string[]): string[] {
           return magicians2.map(magicians2 => "The Great " + magicians2)
}

let magicians2 : string[] = ["Harry", "Criss", "David"]

let great_magicians : string[] = make_great2([... magicians2]);


// show_magicians2 original Names

console.log("Original magicians:")
show_magicians2(magicians2)


console.log("\nThe Great Magicians:")
show_magicians2(great_magicians)