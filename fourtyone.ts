// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians : string[] = ["Harry", "Criss", "David"]
    function show_magicians1(magicians : string[]): void{
            magicians.forEach(magician => {
                console.log(`${magician}`)
            
        });
    }

    

    // calling function
    show_magicians(magicians)