"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
function make_shirt(size = "large", message = "Keep silence") {
    console.log(`"You ordered a ${size} sized T-shirt and message ${message} on it"`);
}
make_shirt();