//Name: Muhammad Usman
// Date: 17/02/2024
//we are converting our person name into lower uper and title case

let personName:string = "Usman";

//lowerCase
console.log("lowercase:"+ personName.toLowerCase());

//UpperCase

console.log("UPPERCASE:"+ personName.toUpperCase());

//titleCase

console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
