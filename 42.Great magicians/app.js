function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var magicianNames = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
var greatMagicians = make_great(magicianNames);
function show_magicians(magicians) {
    console.log('Magicians:');
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
show_magicians(greatMagicians);
