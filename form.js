// // setting up our objects//
// let name = document.getElementById('username');
// let pass = document.getElementById('password')
// let form = document.getElementById('form');

// form.addEventListener("submit", testWrite);

// //test console logging the values//
// function testWrite(){
//   event.preventDefault();
//   console.log(name.value, pass.value);
  
// };

let createUsername = document.getElementById('createUsername');
let createPassword = document.getElementById('createPassword');
let usernameRegex = 

createUsername.addEventListener('keyup', validUsername);

function validUsername() {
  let createUsernameString = document.getElementById('createUsername').value;
  let usernameCheck = str.includes(" ");
  if(createUsernameString.length > usernameCheck) {
    console.log('invalid username') ; 
  }
  else {
    console.log('valid password');
  }
}