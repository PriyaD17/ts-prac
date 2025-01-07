interface User{
    firstName: String,
    lastName: String,
    age: number,
    dob:any
}

function isLegal(user: User){
    if(user.age>=18){
        return true;
    }
    return false;
}