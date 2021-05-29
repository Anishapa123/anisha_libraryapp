let email = document.getElementById("signupemail");
let pwd = document.getElementById("signuppassword");
let error =document.getElementById("error");
let phone =document.getElementById("phonenumber");

function validateForm(){

    

    if(verify1()&&verify2()&&verifypwd()&&StrengthChecker(pwd.value)&& validatePhoneNumber()){
       console.log("checking true"); 
        return true;
    }
    else{
        console.log("checking false"); 
        return false;
    }

}

function validatePhoneNumber(){
alert(phone.value);
  var phoneno = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
     //var phoneno =/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    let regexp  = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (phone.value.match(regexp)) {
        alert("1");
          return true;
   }
   else {
     alert("2");
     return false;
   }
 }


 

function verify1 (){
    
    if(email.value==""||pwd.value==""){
        alert(" Fields cannot be empty")
       return false;
   }
     else{
         return true;      
 }

}
 
function verify2(){
    let regexp =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\- ]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    alert("verify2");
    if(regexp.test(email.value)){
       
        error.innerHTML="Valid";
       error.style.color="green";
        return true;
    }
    else {
        error.innerHTML="Invalid"
        alert( "email is invalid");
         error.style.color ="red";
        return false;
    }
}
 
function verifypwd() {
if(pwd.value.length<=8){
  alert( "password is too short");
  pwd.style.border="2px solid red";
  return false;
}
else{
  return true;
 
}
}

// let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp')
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter){

    if(strongPassword.test(PasswordParameter)) {
        alert("Strong");
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
        return true;
    } else if(mediumPassword.test(PasswordParameter)){
        alert("Medium");
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        alert("Weak");
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}


pwd.addEventListener("input", () => {
    
    StrengthChecker(pwd.value);
    
});