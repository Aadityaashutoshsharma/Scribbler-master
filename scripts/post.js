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

//like function

var numberOfClicks = 0;
function likePost() {
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
// function comments(id) {
//     document.getElementById("commentBox").style.visibility = "visible";
//     var addEventName = id.value + "<br>";
//     var commentEle = document.getElementById("commentsContent");
//     var mainComment = document.getElementById("contentOfComment").innerHTML;
//     mainComment =`<p style="padding:10px;background-color:white;">${addEventName}</p>${mainComment}`;
//     commentEle.value = commentEle.defaultValue;
//   }

var textEle = document.getElementById("commentsContent");
var commentEle = document.getElementById("newComment");

let comments = [];

function getComments() {
  if (textEle.value !== "") {
    comments.push(textEle.value);

    commentEle.innerHTML = comments.map((item) => {
      return `<li class="commentDesign">${item}</li>`;
    });
  } else {
    alert("Please write a comment!");
  }
}

//comment function ended

//edit post function
var edit = false;
function editPost() {
  const paragraph = document.getElementById("blog-body");
  const title = document.getElementById("blogTtileNew");
  var edit_button = document.getElementById("editPost");

  if (edit == false) {
    title.contentEditable = true;
    paragraph.contentEditable = true;

    edit_button.innerHTML = "Save " + `<i class="fa fa-save"></i>`;
    edit = true;
  } else {
    title.contentEditable = false;
    paragraph.contentEditable = false;
    edit_button.innerHTML = "Edit " + `<i class="fa fa-edit"></i>`;
    edit = false;
  }
}
