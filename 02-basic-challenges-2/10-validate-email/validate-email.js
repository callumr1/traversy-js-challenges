function validateEmail(email) {
    let arr = email.split("");

    if(arr.includes("@") && arr.includes(".")){
       // Question requires there is text before the @ for the email to be valid
       if(arr[0] !== "@"){
            return true;
       } else { return false; }
    }
    else {
        return false;
    }

    
}

module.exports = validateEmail;
