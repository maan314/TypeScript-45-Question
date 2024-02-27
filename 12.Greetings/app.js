//friends' names in Array
var names = ['Salman', 'Muzafar', 'Shahbaz', 'Anas', 'Saad'];
// greeting messages
for (var i = 0; i < names.length; i++) {
    var greetingMessage = "Hello, ".concat(names[i], "! Have a great day!");
    console.log(greetingMessage);
}
