var currentUsers = ['john', 'alice', 'bob', 'emma', 'david'];
var newUsers = ['John', 'Bob', 'Charlie', 'Alice', 'Grace', 'Khan',];
var userNames = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (userNames.includes(newUser.toLowerCase())) {
        console.log("Sorry, the username '".concat(newUser, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
}
