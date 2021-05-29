let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error =document.getElementById("error");


function validate1 (){
    
    if(email.value==""||pwd.value==""){
        alert(" Fields cannot be empty")
       return false;
   }
     else{
         return true;
      
    
 }

}
 
function validate2(){
    let regexp =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\- ]+).([a-z]{2,3})(.[a-z]{2,3})?$/
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
 
function checkpwd() {
if(pwd.value.length<=6){
  alert( "password is too short");
  pwd.style.border="2px solid red";
  return false;

  }
  else{
     return true;
    
  }
  
}

