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
    console.log(aUser);// step 5
    // console.log(txtName, txtAge, txtGender, txtAddress, txtPhone, txtEmail, txtPassword, selColor); // step 2 (this check to see if it works)

    // clear input using JQuery
    $("input").val("");
}

function initi(){
    // hook event
}