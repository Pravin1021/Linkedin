//login form validation
    var logform=document.getElementById("logform")
    var logpassword=document.getElementById("logpassword")
    var logemail=document.getElementById("logemail")
    var loginpage=document.getElementById("loginpage")
    var header=document.getElementById("header")
//to prevent log form
logform.addEventListener("submit",function(e){
    e.preventDefault()
})
//to view password
var showpass=document.getElementById("showpass")
showpass.addEventListener("click",passshow)
function passshow(){
    logpassword.setAttribute("type","text")
}

function mysignin(){
    if(logemail.value=="" && logpassword.value==""){
        alert("Enter Mail id and Password")
    }
    else if(logemail.value==""){
        alert("Enter Your Email")
    }
    else if(logpassword.value==""){
        alert("Enter Your Password")
    }else{
        loginpage.style.display="none"
        header.style.display="none"
    }
}
