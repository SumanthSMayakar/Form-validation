
/* main function to validate the form */
function submitHandler(event) {
    event.preventDefault();
    /* variables for each form elements */
            // document.formName.fieldName.value

                
            var name = document.cForm.name.value;
            var email = document.cForm.email.value;
            var mobile = document.cForm.mobile.value;
            var pass = document.cForm.pass.value;
            var cpass = document.cForm.cpass.value;
            var age = document.cForm.age.value
        
            /* Define an error variables */
            var nameErr = emailErr = mobileErr = ageErr = passErr = compassErr = true;
        
        
        

    /* Name Validation */
    if(name === "") {
        printError("nameErr", "Name Field  empty");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    /* Email Validation */
    if(email === "") {
        printError("emailErr", "Email Field empty");
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Invalid Email ID");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    /* Mobile Validation */
    if(mobile === "") {
        printError("mobileErr", "Mobile Field empty");
    } else {
        let regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Invalid Mobile Number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
   

      // password validation
      if(pass === "") {
        printError("passErr", "Password Field empty");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(pass) === false) {
            printError("passErr", "Invalid password");
        } else {
            printError("passErr", "");
            passErr = false;
        }
    }

    // confirm pass validate
    if(cpass !== pass) {
        printError("compassErr", "check password");
    } else {
        printError("compassErr", "");
        compassErr = false;
    }

    // age validation 
    if(age === ""){
        printError("ageErr","Age to be filled ");
        return false;
    }else if(isNaN(age)|| age<18 ||age>100){
        printError("ageErr","Age should be 18 - 100 ");
        return false;
    }else{
        printError("ageErr", "");
        ageErr = false;
    }


    if(!nameErr && !emailErr && !mobileErr && !ageErr && !passErr && !compassErr) {
        alert('Success')
    

    } else {
        alert('error')

    }
    
} 

/* Defining a function to display the error message */ 
function printError(eleId,msg) {
    document.getElementById(eleId).innerText = msg;
}

