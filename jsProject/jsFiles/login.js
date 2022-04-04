const fullName = document.getElementById("registerName");
const email = document.getElementById("registerEmail");
const phone = document.getElementById("phone");
const pass = document.getElementById("registerPass");
const passConfirm = document.getElementById("registerConfirmPass");
const registerbtn = document.getElementById("registerbtn");
const loginbtn = document.getElementById("loginbtn")

const logEmail = document.getElementById("logemail");
const logpass = document.getElementById("logpass");

const phonePattern = /[07]{2,3}[7-9]{1,2}[0-9]{7,8}/;
const passPattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
const namePattern =  /^[a-z ]+$/gi;
const emailPattern =/^[a-zA-Z]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/i;

registerbtn.addEventListener('click' , function(e){
    e.preventDefault()
   
    if(fullName.value!="" && email.value != ""&& phone.value!=""&&pass.value!="" && passConfirm.value!=""){
        if(namePattern.test(fullName.value)){

            localStorage.setItem(`fullName`,`${fullName.value}`)
            fullName.style.border = ""
            fullName.value =""

        }else{

            fullName.style.border = "red 1px solid"
            
        }
        if(emailPattern.test(email.value)){
            localStorage.setItem(`email`,`${email.value}`)
            email.style.border = ""
            email.value =""
        }else{
            email.style.border = "red 1px solid"
        }

        if(phonePattern.test(phone.value)){
            localStorage.setItem(`phone`,`${phone.value}`)
            phone.style.border = ""
            phone.value =""
        }else{
            phone.style.border = "red 1px solid"
        }
        if(passPattern.test(pass.value)){
            localStorage.setItem(`password`,`${pass.value}`)
            pass.style.border = ""
            pass.value =""
        }else{
            pass.style.border = "red 1px solid"
        }
        if(!pass.value == passConfirm.value){
            passConfirm.style.border = "red 1px solid"
            
        }else{
            passConfirm.style.border = ""
            passConfirm.value =""
        }

        validateForm();



    }else{
        fullName.style.border = "red 1px solid"
        email.style.border = "red 1px solid"
        phone.style.border = "red 1px solid"
        pass.style.border = "red 1px solid"
        passConfirm.style.border = "red 1px solid"
    }
  
})

loginbtn.addEventListener("click",function(){
    if(logEmail.value != "" && logpass.value !=""){
        if(logEmail.value == localStorage.getItem("email") && logpass.value == localStorage.getItem("password") ){
            loginbtn.href = "http://127.0.0.1:5500/jsProject/welcom.html"
        }else{
            logEmail.style.border = "red 1px solid"
            logpass.style.border = "red 1px solid"
        }
    
    }else{
        logEmail.style.border = "red 1px solid"
        logpass.style.border = "red 1px solid"
    }
})

function validateForm() {
    alert("User Registered Successfully");
    document.getElementById("reg-log").checked = false;
    return true;
    
}
