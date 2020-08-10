localStorage.clear();

// Calls in the form inputs
let createFirstName = document.getElementById('createFirstName');
let createLastName = document.getElementById('createLastName');
let inputEmail = document.getElementById('inputEmail');

// Calls in the submit button
let nameSubmit = document.getElementById('firstPageForm');

let nameArray = [];
let emailArray = [];
let emptyStringTest = /^$/

// temporary test code to display a welcome message on the  landing page when the final log in is finished
let welcome = document.getElementById('welcome');

// Event listener that fires the 'validNames' function when when the submit button is clicked
nameSubmit.addEventListener('click', validNames);

// This function makes sure that the names out in by the user are valid
function validNames() {
  event.preventDefault();
  // These are regex tester for the if statements
  let testCharacter = /^[^!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿0123456789]*$/

  // This tests to see if the user filled in all input fiels or not
  if(emptyStringTest.test(createFirstName.value) || emptyStringTest.test(createLastName.value)) {
    // console.log('invalid name input 1234');
    document.getElementById('nameInputError').style.display = "block";
    document.getElementById('emailInputError').style.display = "none";
  }
  else if(emptyStringTest.test(inputEmail.value)) {
    document.getElementById('emailInputError').style.display = "block";
    document.getElementById('nameInputError').style.display = "none";
  }
  // This tests for any invalid characters that should not be in a name
  else if(testCharacter.test(createFirstName.value) && testCharacter.test(createLastName.value)) {
    // let saveNames = new Object(createFirstName.value + " " + createLastName.value);

    let name = `${createFirstName.value} ${createLastName.value}`
    // nameArray.push(saveNames);
    let email = inputEmail.value

    // console.log('username.js name',name);
    // console.log('username.js email',email);
    localStorage.setItem('realName', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));
    // emailArray.push(saveEmail);
    // console.log('all user names', nameArray);
    // console.log('all user emails', emailArray);
    document.getElementById('nameInputError').style.display = "none";
    document.getElementById('emailInputError').style.display = "none";
    window.location.replace('http://127.0.0.1:5501/register.html');
    
    // welcome.style.display = "none";
    // temporary test code to display a welcome message on the  landing page when the final log in is finished
    // welcome.style.display = "block";
    // welcome.innerHTML = ('Welcome ' + nameArray + '!');
  }
  // Just in case there is some other problem this will give an error message
    else {
    //   console.log('invalid name input');
      document.getElementById('nameInputError').style.display = "block";
      welcome.style.display = "none";
    }
  }