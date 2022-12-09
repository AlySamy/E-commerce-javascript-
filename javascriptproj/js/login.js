var nameInp = document.getElementById("name");
var textSpan = document.getElementById("textSpan");
var emailInp = document.getElementById("email");
var emailSpan = document.getElementById("emailSpan");
var passInp = document.getElementById("password");
var passSpan = document.getElementById("passSpan");
var malecheck = document.getElementById("male");
var femalecheck = document.getElementById("female");
var genderSpan = document.getElementById("genderSpan");

var myForm = document.getElementById("myForm");
function nameValidate() {
  if (nameInp.value === "") {
    nameInp.style.border = "1px solid red";
    textSpan.style.display = "inline-block";
    textSpan.style.color = "red";
  } else {
    nameInp.style.border = "2px solid green";
    textSpan.style.display = "none";
    return true;
  }
}

function emailValidate() {
  var emailReGx = /[a-z]{3}@[a-z]{3}.com/;
  if (emailReGx.test(emailInp.value) == true) {
    emailInp.style.border = "2px solid green";
    emailSpan.style.display = "none";
    return true;
  } else {
    emailInp.style.border = "1px solid red";
    emailSpan.style.display = "inline-block";
    emailSpan.style.color = "red";
  }
}

function passwordValidate() {
  if (passInp.value === "" || passInp.value.length < 8) {
    passInp.style.border = "1px solid red";
    passSpan.style.display = "inline-block";
    passSpan.style.color = "red";
  } else {
    passInp.style.border = "2px solid green";
    passSpan.style.display = "none";
    return true;
  }
}

function genderValidate() {
  if (malecheck.checked || femalecheck.checked) {
    genderSpan.style.display = "none";
    return true;
  } else {
    genderSpan.style.display = "inline-block";
    genderSpan.style.color = "red";
  }
}

function validation(e) {
  e.preventDefault();

  if (
    nameValidate() &&
    passwordValidate() &&
    emailValidate() &&
    genderValidate()
  ) {
    goToHome();
  }
}
function goToHome() {
  window.open("index.html");
}
