var modal = document.getElementById("myModal");

var modalSignIn = document.getElementById("myModal-signIn");

// Got the button that opens the modal
var btn = document.getElementById("myBtn");

var btnSignIn = document.getElementById("myBtnSignIn");

// Got the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var spanSignIn = document.getElementsByClassName("closeSignIn")[0];

/* Modal Content Elements */

var nameEle = document.getElementById("name");
var userNameEle = document.getElementById("userName");
var passwordEle = document.getElementById("password");
var confirmPasswordEle = document.getElementById("confirmPassword");

// When the user clicks on the button, open the modal

btn.popUp = () => {
    modal.style.display = "flex";
}

span.newPopUp = () => {
    modal.style.display = "none";
}

btnSignIn.popUp2 = () => {
    modalSignIn.style.display = "flex";
}

spanSignIn.newPopUp2 = () => {
    modalSignIn.style.display = "none";
}

function getSignUpData(){
    if(nameEle && userNameEle && passwordEle && confirmPasswordEle){
         console.log(nameEle.value,userNameEle.value,passwordEle.value,confirmPasswordEle.value);
    }
}
