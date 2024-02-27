var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesVisit = ["Afghanistan", "Brazil", "Korea", "Denmark", "France",];
//Orignal Form
console.log(placesVisit);
//Alphabatical Order
console.log('Alphabatical Order:', __spreadArray([], placesVisit, true).sort());
console.log(placesVisit);
//Reversed
placesVisit.reverse();
console.log("Reversed:", placesVisit);
//Reversed again
placesVisit.reverse();
console.log("Reversed Again:", placesVisit);
//Alphabatical Change
placesVisit.sort();
console.log('Alphabatical change:', placesVisit);
//Reverse Alphabatical
placesVisit.sort().reverse();
console.log('Reverse Alphabticl chnge:', placesVisit);
