//validation for inputs

//Validation  for Login form
var email = document.forms['formLg']['eml'];
var password = document.forms['formLg']['pass'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validationLog() {
  if (email.value.length < 9) {
    email.style.boder = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;}

  if (password.value.length < 6) {
    password.style.boder = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;}
}

function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;}
}

function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;}
}

//-----------------------------------------------------------//
//Validation  for Registration form

var util = document.forms['formRg']['util'];
var email_2 = document.forms['formRg']['eml_2'];
var password_2 = document.forms['formRg']['pass_2'];

var util_error = document.getElementById('util_error');
var email_error_2 = document.getElementById('email_error_2');
var pass_error_2 = document.getElementById('pass_error_2');

util.addEventListener('textInput', util_Verify);
email_2.addEventListener('textInput', email_Verify_2);
password_2.addEventListener('textInput', pass_Verify_2);

function validationReg() {
  if (util.value.length < 7) {
    util.style.boder = "1px solid red";
    util_error.style.display = "block";
    util.focus();
    return false;}

  if (email_2.value.length < 9) {
    email_2.style.boder = "1px solid red";
    email_error_2.style.display = "block";
    email_2.focus();
    return false;}

  if (password_2.value.length < 6) {
    password_2.style.boder = "1px solid red";
    pass_error_2.style.display = "block";
    password_2.focus();
    return false;}
}

function util_Verify(){
	if (util.value.length >= 6) {
		util.style.border = "1px solid silver";
		util_error.style.display = "none";
		return true;}
}

function email_Verify_2(){
	if (email_2.value.length >= 8) {
		email_2.style.border = "1px solid silver";
		email_error_2.style.display = "none";
		return true;}
}

function pass_Verify_2(){
	if (password_2.value.length >= 5) {
		password_2.style.border = "1px solid silver";
		pass_error_2.style.display = "none";
		return true;}
}
