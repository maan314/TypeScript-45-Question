let userNames:string[]=['Khan', 'Aadil', 'admin', 'salman', 'Usman'];

for (let userName of userNames ){
    if(userName === 'admin'){
        console.log("Hello, Admin, You Welcome")
    }else {
        console.log(`Hello ${userName}, Thank you Login`)
    }
}

//By removin all the users
userNames.splice(0);
if (userNames.length === 0){
    console.log(`we need to find some user ${userNames}`)
}
console.log(`${userNames}`)
