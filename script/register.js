// add payment method using a select element on the html element

// object constructor
function User(firstName, lastName, age, gender, address, phone, email, password, color, payment){// step 3 (defining the format)
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.color = color;
    this.payment = payment;
}

// function isValid(aUser){
//     let valid = true;

//     if(aUser.firstName =="" || aUser.lastName ==""|| aUser.age ==""|| aUser.gender ==""|| aUser.address ==""|| aUser.phone ==""|| aUser.email ==""|| aUser.password ==""|| aUser.payment == ""){
//         valid=false;
//         alert("Please enter the required information");
//     }
//     return valid;

// }

function isValid(User){
    let valid = true;
    $("input").removeClass("input-error");
    
    if(User.firstName==""){
        valid=false
        $("#userFirstName").addClass("input-error");
        console.log("Please enter your First Name");
    }

    if(User.lastName.length==0){
        valid=false;
        $("#userLastName").addClass("input-error");
        console.log("Please enter your Last Name");
    }

    if(User.age.length==0){
        valid=false;
        $("#userAge").addClass("input-error");
        console.log("Please enter your Age");
    }

    if(User.gender.length==0){
        valid=false;
        $("#userGender").addClass("input-error");
        console.log("Please enter your Gender");
    }

    if(User.address.length==0){
        valid=false;
        $("#userAddress").addClass("input-error");
        console.log("Please enter your Address");
    }

    if(User.phone==""){
        valid=false
        $("#userPhone").addClass("input-error");
        console.log("Please enter your Phone Number");
    }

    if(User.email ==""){
        valid=false;
        $("#userEmail").addClass("input-error");
        console.log("Please enter an E-Mail");
    }

    if(User.password.length==0){
        valid=false;
        $("#userPassword").addClass("input-error");
    }
    return valid;

}

function validatePass(){
    console.log("Validating Password");
    let inputPass = $("#userPassword");// getting the input #userPassword
    let password = inputPass.val();// getting the value
    if(password.length<6){
        inputPass.css("background-color","#ff9898");
        console.log("Password must be at least 6 characters");
        displayError("Password must be at least 6 characters");
    }

    else{
        inputPass.css("background-color","lightgreen");
        console.log("Format is correct")
        hideError();
    }
   

}

function displayError(msg){
    $("#alert-error").removeClass("hide").text(msg);
}

function hideError(){
    $("#alert-error").addClass("hide");

}

function register(){// step 1
    // getting value from input from the HTML
    let txtFirstName = $("#userFirstName").val();
    let txtLastName = $("#userLastName").val();
    let txtAge = $("#userAge").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtPhone = $("#userPhone").val();
    let txtEmail = $("#userEmail").val();
    let txtPassword = $("#userPassword").val();
    let selColor = $("#userColor").val();
    let paymentSelector = $("#paymentSelector").val();

    // create the user object
    let aUser = new User(txtFirstName, txtLastName, txtAge, txtGender, txtAddress, txtPhone, txtEmail, txtPassword, selColor, paymentSelector);// step 4   
    // display the object in the console
    // console.log(aUser);// step 5
    // console.log(txtName, txtAge, txtGender, txtAddress, txtPhone, txtEmail, txtPassword, selColor); // step 2 (this check to see if it works)
    if(isValid(aUser)){
        hideError();
        saveUser(aUser);

    // clear input using JQuery
        $("input").val("");

    // $("#hide-form").on("click", function(){
    //     $(".form-container").slideUp(2000);
    // });
    
    }

    else{
        console.log("Please complete all fields");
        displayError("Please complete all fields");
    }

}

function init(){
    // hook event
    $("#btnSave").on("click",register);
    $("h1").on("click", function(){
        $("nav").hide();
    });

    $(".form-container").hide();
    $("#show-form").on("click", function(){
        $(".form-container").slideDown(2000);
});

    $("#hide-form").on("click", function(){
        $(".form-container").slideUp(2000);
    });

    $("#userPassword").keyup(validatePass);
}
window.onload=init;
