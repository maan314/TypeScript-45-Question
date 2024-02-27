// Guest list
var guestList = ['Muzafar', 'Salman', 'Saad'];
// Inform about finding a bigger dinner table
console.log('Good news! I found a bigger dinner table.');
// Add one new guest to the beginning of the list
guestList.unshift('Aadil');
// Add one new guest to the middle of the list
guestList.splice(Math.floor(guestList.length / 2), 0, 'Arslan');
//add one new guest to the end of the list,
guestList.push('Imran');
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",You are invited to join me for dinner. It would be an honor to have your presence.\nBest regards,\nMuhammad Usman"));
}
