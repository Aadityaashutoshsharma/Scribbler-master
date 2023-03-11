// SignUp Button Function

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.popUp = () => {
  modal.style.display = "flex";
};

span.newPopUp = () => {
  modal.style.display = "none";
};

//SignUp Function Ended

//Data stored in SignUp Modal
var nameEle = document.getElementById("name");
var userNameEle = document.getElementById("userName");
var passwordEle = document.getElementById("password");
var confirmPasswordEle = document.getElementById("confirmPassword");

function getSignUpData() {
  if (nameEle && userNameEle && passwordEle && confirmPasswordEle) {
    console.log(
      nameEle.value,
      userNameEle.value,
      passwordEle.value,
      confirmPasswordEle.value
    );
  }
}
//Function ended for data storing

//SignIn button Function
var modalSignIn = document.getElementById("myModal-signIn");
var btnSignIn = document.getElementById("myBtnSignIn");
var btnSignUp = document.getElementById("buttonSignUp");
var spanSignIn = document.getElementsByClassName("closeSignIn")[0];

btnSignUp.popUp = () => {
  modal.style.display = "flex";
  modalSignIn.style.display = "none";
};

btnSignIn.popUp2 = () => {
  modalSignIn.style.display = "flex";
};

spanSignIn.newPopUp2 = () => {
  modalSignIn.style.display = "none";
};

//SignIn function ended

var deletePostModal = document.getElementById("deletePostModal");
var deletePostModalIcon = document.getElementById("dltIcon");
var deletePostModalspan = document.getElementById("notDlt");

deletePostModalIcon.onclick = function () {
  deletePostModal.style.display = "block";
};
deletePostModalspan.onclick = function () {
  deletePostModal.style.display = "none";
};
var id = "";
function setId(htmlId) {
  deletePostModal.style.display = "block";
  id = htmlId;
}
function dltPost() {
  deletePostModal.style.display = "none";
  document.getElementById(id).style.display = "none";
}

//function to open the post
function openPost(userName, blogTitle, blogContent) {
  let url = `../html/post.html?blogTitle=${encodeURIComponent(
    blogTitle.innerText
  )}&userName=${encodeURIComponent(
    userName.innerText
  )}&blogContent=${encodeURIComponent(blogContent.innerText)}`;
  window.location.href = url;
}