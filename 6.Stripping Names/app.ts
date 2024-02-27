// Name: Muhammad Usman
// Date: 17/02/2024
//we are using trim method to remove the whitespaces


let personName: string = '\t\n   Usman Khan   \t\n';

// Print with whitespace
console.log(`Name with Whitespace: "${personName}"`);

// without whitespace and print the name
let strippedName: string = personName.trim();
console.log(`Stripped Name: "${strippedName}"`);
