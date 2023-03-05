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

//SignIn function data storing
var userNameEle2 = document.getElementById("userName");
var passwordEle2 = document.getElementById("password");

function getSignInData() {
  if (userNameEle2 && passwordEle2) {
    console.log(userNameEle2.value, passwordEle2.value);
  }
}

//data storing ended for signing function

//edit post function
var titleOfPost = document.getElementById("blog-title");
var contentOfPost = document.getElementById("blog-body");
var editButton = document.getElementById("editingPost");

let queryString = new Array();
let edit = false;
let num = 0;

function editPost() {
  var newEdit = false;
  num += 1;
  if (!edit) {  //this will change the design of Title and Content of the blog when edit is clicked
    edit = true;
    newEdit = true;
    titleOfPost.style.borderWidth = "2px";
    titleOfPost.style.borderColor = "red";
    titleOfPost.style.borderStyle = "solid";
    titleOfPost.contentEditable = "true";
    contentOfPost.contentEditable = "true";
    contentOfPost.style.borderWidth = "2px";
    contentOfPost.style.borderColor = "red";
    contentOfPost.style.borderStyle = "solid";
    editButton.innerHTML = `Save <i class="fa fa-save"></i>`;
  } else {
    if (num == 2) { //this will save the updated title and content when save is clicked
      titleOfPost.innerHTML = `<span>UPDATED:</span>${titleOfPost.innerHTML}`;
      contentOfPost.innerHTML = `<div>UPDATED:</div>${contentOfPost.innerHTML}`;
      editButton.innerHTML = `Edit <i class="fa fa-edit"></i>`;
      contentOfPost.style.border = "none";
      titleOfPost.style.border = "none";
    }
    else { //this will keep the changes made after edit
      titleOfPost.innerHTML = `${titleOfPost.innerHTML}`;
      contentOfPost.innerHTML = `${contentOfPost.innerHTML}`;
      editButton.innerHTML = `Edit <i class="fa fa-edit"></i>`;
      contentOfPost.style.border = "none";
      titleOfPost.style.border = "none";
    }
  }
  if(!newEdit) { //this will allow us to edit the blog multiple times
    edit = false;
  }
}

//edit function ended

//like function

var numberOfClicks = 0;
function likePost() { //this function will increase 1 like per click 
  document.getElementById("like-blog").innerHTML =
    `<i class="fa fa-thumbs-up" aria-hidden="true"></i>` + " Liked!";
  numberOfClicks += 1;
  if (numberOfClicks != 0) {
    if (numberOfClicks == 1) {
      document.getElementById("like-count").innerHTML =
        numberOfClicks + " person likes this!";
    } else {
      document.getElementById("like-count").innerHTML =
        numberOfClicks + " people have liked this!";
    }
  }
}

//like function ended

//comment function

var textEle = document.getElementById("commentsContent");
var commentEle = document.getElementById("newComment");

let comments = [];

function getComments() {
  if (textEle.value !== "") {
    commentEle.innerHTML += `<li class="commentDesign">${textEle.value}</li>`;
  } else {
    alert("Please write a comment!");
  }
}

//comment function ended

//this function will accept the post from postslist and edit the post content
window.onload = () => {
  if (queryString.length == 0) {
    if (window.location.search.split("?").length > 1) {
      const param = window.location.search.split("?")[1].split("&");
      for (let i = 0; i < param.length; i++) {
        const key = param[i].split("=")[0];
        const value = decodeURIComponent(param[i].split("=")[1]);
        queryString[key] = value;
      }
    }
  }
  if (
    queryString.blogTitle != null &&
    queryString.userName != null &&
    queryString.blogContent != null
  ) {
    const { blogTitle } = queryString;
    const { userName } = queryString;
    const { blogContent } = queryString;
    document.getElementsByClassName("blog-Title")[0].innerHTML = blogTitle;
    document.getElementsByClassName("author")[0].innerHTML = userName;
    document.getElementsByClassName("contentOfBlog")[0].innerHTML = blogContent;
  }
};
