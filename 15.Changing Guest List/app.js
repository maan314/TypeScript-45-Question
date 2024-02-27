var guestCantMakeIt = 'Shahbaz';
var newGuestList = ['Muzafar', 'Salman', 'Saad'];
for (var i = 0; i < newGuestList.length; i++) {
    console.log("Dear ".concat(newGuestList[i], ",You are invited to join me for dinner. It would be an honor to have your presence.\nBest regards,\nMuhammad Usman"));
}
console.log("Unfortunately, ".concat(guestCantMakeIt, " won't be able to make it to the dinner."));
