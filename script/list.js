function displayUser(userArray){
    const userTbl = document.getElementById("userTable");
    userTbl.innerHTML=``;
    // travel the array
        for (let i=0; i<userArray.length; i++) {
        
        // get the user
        console.log(userArray[i]);
        let user=userArray[i];
        // creath the html row element
        row=`
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td style="background-color:${user.color};"></td>
                <td>${user.payment}</td>
            </tr>        
        `;
        $("#userTable").append(row)
        }
    // append the row into the table

}

function init(){
    console.log("Listing...");
    let user = readUser();
    displayUser(user);

}
window.onload=init;