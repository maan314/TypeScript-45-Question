let placesVisit:string[]=["Afghanistan", "Brazil", "Korea", "Denmark", "France",];
//Orignal Form
console.log(placesVisit);
//Alphabatical Order
console.log('Alphabatical Order:',[...placesVisit].sort());

console.log(placesVisit);
//Reversed
placesVisit.reverse();
console.log("Reversed:",placesVisit);
//Reversed again
placesVisit.reverse();
console.log("Reversed Again:", placesVisit);
//Alphabatical Change
placesVisit.sort();
console.log('Alphabatical change:', placesVisit);
//Reverse Alphabatical
placesVisit.sort().reverse();
console.log('Reverse Alphabticl chnge:', placesVisit);

