let objuser=[];
let signup={};
function registerUser(){
    if(localStorage.logup){
        objuser=JSON.parse(localStorage.logup)
    }
    else{
        objuser=[];
    }

    signup={
        username:nameofuser.value,
        password:passkey.value,
     }
     for(var i=0; i<objuser.length; i++) {
        if(objuser[i].username == nameofuser.value){
          alert('That username is already taken, please choose another')
          return
        }  
        else{}
    }
        objuser.push(signup)
        console.log(signup)
        localStorage.setItem("logup",JSON.stringify(objuser))
        alert("Success")
        location.href="./Signin.html"
} 

function login(){
	var logIn =[]
	logIn = JSON.parse(localStorage.logup);
	var locate = logIn.find(a  => a.username == us.value && a.password == newPassword.value)
	// console.log(locate)
	if(!locate){
		alert("Oops!, Looks like you dont have an account😃")
	}
	else if(us.value == "")
	{
		alert("Input Your Username")
		us.focus()
	}
	else if(newPassword.value == "")
	{
		alert("Input Your password ")
		newPassword.focus()
	}
	else{
		localStorage.setItem("currentUser",JSON.stringify(locate))
		var i = logIn.indexOf(locate)
		//console.log(locate)
		alert("Welcome")
		//location.href="./dashboard.html";
		 window.open("./welcome.html")
	}
}