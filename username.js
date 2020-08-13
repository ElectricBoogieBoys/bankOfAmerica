localStorage.clear();

// Calls in the form inputs
let createFirstName = document.getElementById('createFirstName');
let createLastName = document.getElementById('createLastName');
let inputEmail = document.getElementById('inputEmail');
let form = document.getElementById('form');

// Calls in the submit button
let nameSubmit = document.getElementById('nameSubmit');

let nameArray = [];
let emailArray = [];
let emptyStringTest = /^$/
const URL = 'https://electricboogieboys.github.io/bankOfAmerica/'
//const URL = 'http://127.0.0.1:5501/'

// temporary test code to display a welcome message on the  landing page when the final log in is finished
let welcome = document.getElementById('welcome');

// Event listener that fires the 'validNames' function when when the submit button is clicked
nameSubmit.addEventListener('click', validNames);
form.addEventListener('keyup', checker);
// This function makes sure that the names out in by the user are valid
function validNames() {
  event.preventDefault();
  // These are regex tester for the if statements
  let testCharacter = /^[^!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿0123456789]*$/
  let testEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  
  // This tests to see if the user filled in all input fiels or not
  if(emptyStringTest.test(createFirstName.value) || emptyStringTest.test(createLastName.value)) {
    document.getElementById('nameInputError').style.display = "block";
    document.getElementById('emailInputError').style.display = "none";
  }
  else if(emptyStringTest.test(inputEmail.value)) {
    document.getElementById('emailInputError').style.display = "block";
    document.getElementById('nameInputError').style.display = "none";
  }
  // This tests for any invalid characters that should not be in a name
  else if(testCharacter.test(createFirstName.value) && testCharacter.test(createLastName.value) && testEmail.test(inputEmail.value)) {

    let name = `${createFirstName.value} ${createLastName.value}`
    let email = inputEmail.value

    localStorage.setItem('realName', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));isplay = "none";
    document.getElementById('emailInputError').style.display = "none";
    window.location.replace(`${URL}register.html`);
    
  }
  // Just in case there is some other problem this will give an error message
    else {
      document.getElementById('nameInputError').style.display = "block";
      welcome.style.display = "none";
    }
  }

  function checker() {
    if(emptyStringTest.test(createFirstName.value) || emptyStringTest.test(createLastName.value)) {
      document.getElementById('nameInputError').style.display = "block";
      document.getElementById('emailInputError').style.display = "none";
    }
    else if(emptyStringTest.test(inputEmail.value)) {
      document.getElementById('emailInputError').style.display = "block";
      document.getElementById('nameInputError').style.display = "none";
    }
    else {
      document.getElementById('emailInputError').style.display = "none";
      document.getElementById('nameInputError').style.display = "none";
    }
  }