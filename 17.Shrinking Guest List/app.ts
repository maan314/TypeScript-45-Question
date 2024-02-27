// Original guest list
let guestList: string[] = ['Aadil', 'Muzafar', 'Arslan', 'Salman', 'Saad', 'Imran'];


// Print a message saying you can invite only two people for dinner
console.log('Unfortunately, the new dinner table won’t arrive in time, and I can only invite two people for dinner.');

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print messages to the two people still on the list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},You are still invited to join me for dinner. It would be an honor to have your presence.\nBest regards,\nMuhammad Usman`);
}

// Remove the last two names from the list
guestList.splice(0,2);

// Print the list to make sure it's empty
console.log('Final Guest List:', guestList);
