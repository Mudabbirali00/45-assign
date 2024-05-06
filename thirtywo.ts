
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted


let current_users : string[] = ["junaid", "Mubashir", "ateeb", "zayn", "saad"]
let new_users: string[] = ["asad", "zohaib", "jihad", "Ateeb", "Zayn"]

for(let new_username of new_users){
let lower_new_username = new_username.toLowerCase() 
    let found = false
    

for(let currentUsers of current_users){
    if(currentUsers.toLowerCase() ===lower_new_username){
        found = true
        break;
    }
  }
//   print a message to users whether is available or not
if(found){
    console.log(`Username ${new_username} is not available`)
}
else{
    console.log(`Username ${new_username} is available`)
}
}