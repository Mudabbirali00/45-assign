"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size = "large", message = "I love typescript") {
    console.log(`"You ordered a ${size} sized T-shirt and with the message of: ${message}"`);
}
// calling function
make_shirt2();
// creating size for default message
make_shirt2("medium");
// for a different Message
make_shirt2("small", "keep silence");
