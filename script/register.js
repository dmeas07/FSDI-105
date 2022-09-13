// add payment method using a slect element on the html element

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

function isValid(aUser){
    let valid = true;

    if(aUser.firstName =="" || aUser.lastName ==""|| aUser.age ==""|| aUser.gender ==""|| aUser.address ==""|| aUser.phone ==""|| aUser.email ==""|| aUser.password ==""|| aUser.payment == ""){
        valid=false;
        alert("Please enter the required information");
    }
    return valid;

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
    saveUser(aUser);

    // clear input using JQuery
    $("input").val("");

    // $("#hide-form").on("click", function(){
    //     $(".form-container").slideUp(2000);
    // });
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
}
window.onload=init;
