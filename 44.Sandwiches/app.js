function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log('Sandwich Order:');
    for (var i = 0; i < ingredients.length; i++) {
        console.log("-".concat(ingredients[i]));
    }
}
console.log("\nEnjoy your Sandwich");
make_sandwich("Ham", "Cheese", "Tomato");
make_sandwich("Turkey", "Swiss", "Mayo");
make_sandwich("Peanut Butter", "Jelly");
