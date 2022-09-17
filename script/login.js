function login(){
    console.log("logging in...");
    // get value from EMail and Password
    let loginEmail = $("#userEmail").val();

    let loginPassword = $("#userPass").val();
    // use a flag to see if we're logged in
    let flag=true
    // get user from local storage

    // travel the array
    let users = readUser();

    for(let i = 0; i < users.length; i++) {
        
        
    // compare the credentials
        let user = users[i];
        if(user.password ==loginPassword && user.email ==loginEmail){
    // redirect user to user.html
        
        window.location="user.html";
        }

        else{
            flag=false;
        }    
    }       
    // display the msg invalid credentials
    if(!flag){
        $("#alert-error").removeClass("hide");
        setTimeout(function(){
        $("#alert-error").addClass("hide")
        },3000);
    }

}
function init(){
    $("#loginBtn").click(login);
}


window.onload = init;