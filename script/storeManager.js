const KEY = "user";
function saveUser(user){
    let oldData = readUser();// ["empty array"] or [user]
    oldData.push(user);
    let val=JSON.stringify(oldData);
    console.log(val);
    localStorage.setItem(KEY, val);
}

function readUser(){
    // get the values from the local storage
    let data=localStorage.getItem(KEY);
    console.log(data);
    if(!data){// is there data in the local storage ("!" means "doe not equal")
        return []; // create the array
    }else{// we have data
        let list=JSON.parse(data);// parsing means returning string back to an object/array
        console.log(list);
        return list
    }         
}

