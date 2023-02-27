var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

/* Modal Content Elements */
var nameEle = document.getElementById("name");
var userNameEle = document.getElementById("userName");
var passwordEle = document.getElementById("password");
var confirmPasswordEle = document.getElementById("confirmPassword");

btn.popUp = () => {
    modal.style.display = "flex";
}

span.newPopUp = () => {
    modal.style.display = "none";
}
function getData(){
    if(nameEle && userNameEle && passwordEle && confirmPasswordEle){
 console.log(nameEle.value,userNameEle.value,passwordEle.value,confirmPasswordEle.value);
    }
}
