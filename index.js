// create a new, empty array to hold the messages;
let messages = [];

// iterate through the input array and, inside the loop, build out the 'thank you' message for each name using string interpolation, then add that message to the new array you created;
function writeCards(names, eventName) {
    
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    };

    // after the loop finishes and all of the messages have been added to the new array, return the new array.
    return messages;
}

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num --);
    }
}



