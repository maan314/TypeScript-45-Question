var car = 'supra';
// Test 1: Is car equal to 'supra'? I predict True.
console.log(car === 'supra'); // True
// Test 2: Is car not equal to 'toyota'? I predict True.
console.log(car !== 'toyota'); // True
// Test 3: Is car equal to 'Supra' (case-sensitive)? I predict False.
console.log(car === 'Supra'); // False
// Test 4: Is car not equal to 'supra' (case-sensitive)? I predict False.
console.log(car !== 'supra'); // False
// Test 5: Car length is greater than 6 i predict false
console.log(car.length > 6); // False
// Test 6: is car length is less than 6 ? i predict true
console.log(car.length < 6); // False
// Test 7: Is the length of car equal to 6? I predict True.
console.log(car.length === 6); // True
// Test 8: Is car equal to 'honda'? I predict False.
console.log(car === 'honda'); // False
// Test 9: Is the length of car not equal to 7? I predict True.
console.log(car.length !== 7); // True
// Test 10: Is car equal to 'supra' (case-insensitive)? I predict true.
console.log(car.toLowerCase() === 'supra'); // true
