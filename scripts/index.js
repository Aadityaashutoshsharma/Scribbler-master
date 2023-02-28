// SignUp Button Function

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.popUp = () => {
    modal.style.display = "flex";
}

span.newPopUp = () => {
    modal.style.display = "none";
}

//SignUp Function Ended


//Data stored in SignUp Modal
var nameEle = document.getElementById("name");
var userNameEle = document.getElementById("userName");
var passwordEle = document.getElementById("password");
var confirmPasswordEle = document.getElementById("confirmPassword");

function getSignUpData(){
    if(nameEle && userNameEle && passwordEle && confirmPasswordEle){
         console.log(nameEle.value,userNameEle.value,passwordEle.value,confirmPasswordEle.value);
    }
}
//Function ended for data storing

//SignIn button Function
var modalSignIn = document.getElementById("myModal-signIn");
var btnSignIn = document.getElementById("myBtnSignIn");
var btnSignUp = document.getElementById("buttonSignUp");
var spanSignIn = document.getElementsByClassName("closeSignIn")[0];

btnSignUp.popUp = () => {
    modal.style.display="flex";
    modalSignIn.style.display="none";
}

btnSignIn.popUp2 = () => {
    modalSignIn.style.display = "flex";
}

spanSignIn.newPopUp2 = () => {
    modalSignIn.style.display = "none";
}

//SignIn function ended

//SignIn function data storing
var userNameEle2 = document.getElementById("userName");
var passwordEle2 = document.getElementById("password");

function getSignInData() {
    if(userNameEle2 && passwordEle2) {
        console.log(userNameEle2.value, passwordEle2.value);
    }
}

//data storing ended for signing function

//Post function
var modalPost = document.getElementById("postModal");
var btnCreate = document.getElementById("posts");
var spanCreate = document.getElementsByClassName("closePost")[0];

function createPost() {
    modalPost.style.display = "flex";
}

function closePost() {
    modalPost.style.display = "none";
}

//Post function ended


//data storing for posts
var titleEle = document.getElementById("title");
var contentEle = document.getElementById("content");

function getPostData(){
    if(titleEle && contentEle){
         console.log(titleEle.value, contentEle.value);
    }
    // location.href="http://www.google.com";

}

//data storing ended for posts
