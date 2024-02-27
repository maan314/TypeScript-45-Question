//friends' names in Array
let names: string[] = ['Salman', 'Muzafar', 'Shahbaz', 'Anas', 'Saad'];

// greeting messages
for (let i = 0; i < names.length; i++) {
    let greetingMessage: string = `Hello, ${names[i]}! Have a great day!`;
    console.log(greetingMessage);
}
