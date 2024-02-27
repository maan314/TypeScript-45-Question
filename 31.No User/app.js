var userNames = ['Khan', 'Aadil', 'admin', 'salman', 'Usman'];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var userName = userNames_1[_i];
    if (userName === 'admin') {
        console.log("Hello, Admin, You Welcome");
    }
    else {
        console.log("Hello ".concat(userName, ", Thank you Login"));
    }
}
//By removin all the users
userNames.splice(0);
if (userNames.length === 0) {
    console.log("we need to find some user ".concat(userNames));
}
console.log("".concat(userNames));
