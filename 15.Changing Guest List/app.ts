

let guestCantMakeIt: string = 'Shahbaz';


let newGuestList: string[] = ['Muzafar', 'Salman', 'Saad'];

for (let i = 0; i < newGuestList.length; i++) {
    console.log(`Dear ${newGuestList[i]},You are invited to join me for dinner. It would be an honor to have your presence.\nBest regards,\nMuhammad Usman`);
}

console.log(`Unfortunately, ${guestCantMakeIt} won't be able to make it to the dinner.`);

