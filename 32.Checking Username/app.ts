let currentUsers: string[] = ['john', 'alice', 'bob', 'emma', 'david'];
let newUsers: string[] = ['John', 'Bob', 'Charlie', 'Alice', 'Grace', 'Khan', ];


let userNames: string[] = currentUsers.map(user => user.toLowerCase());


for (let newUser of newUsers) {

  if (userNames.includes(newUser.toLowerCase())) {
    console.log(`Sorry, the username '${newUser}' is not available. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${newUser}' is available.`);
  }
}
