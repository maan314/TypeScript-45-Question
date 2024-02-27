function show_magicians(magicians) {
    console.log('Magicians:');
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
show_magicians(magicianNames);
