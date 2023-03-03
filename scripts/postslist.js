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

//Prompt for deleting a post 

var deletePostEle = document.getElementById('deleteBlogPrompt');
var deleteModalEle1 = document.getElementById('post1');
var deleteModalEle2 = document.getElementById('post2');
var deleteModalEle3 = document.getElementById('post3');
var deleteModalEle4 = document.getElementById('post4');
var deleteModalEle5 = document.getElementById('post5');



function deletePost() {
    deletePostEle.style.display = "flex";
}

//prompt ended

//deleting a post

// function deletingPost() {

//     document.getElementsByClassName('postContainer')[1].remove();
    
// }
deletingPost = () => {
    deleteModalEle1.style.display = "none";
}

//function to remove the delete prompt
var dltEle = document.getElementById("deleteBlogPrompt");

function closeDelete(){
    dltEle.style.display = "none";
}


//function to open the post
function openPost(userName,blogTitle,blogContent){
    let url = `../html/post.html?blogTitle=${encodeURIComponent(blogTitle.innerText)}&userName=${encodeURIComponent(
        userName.innerText
    )}&blogContent=${encodeURIComponent(blogContent.innerText)}`;
    window.location.href=url;
}