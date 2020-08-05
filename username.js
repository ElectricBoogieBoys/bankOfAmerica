// Calls in the form inputs
let createFirstName = document.getElementById('createFirstName');
let createLastName = document.getElementById('createLastName');
let inputEmail = document.getElementById('inputEmail');

// Calls in the submit button
let nameSubmit = document.getElementById('nameSubmit');

let nameArray = [];
let emailArray = [];
let emptyStringTest = /^$/

// temporary test code to display a welcome message on the  landing page when the final log in is finished
let welcome = document.getElementById('welcome');

// Event listener that fires the 'validNames' function when when the submit button is clicked
nameSubmit.addEventListener('click', validNames);

// This function makes sure that the names out in by the user are valid
function validNames() {

  // These are regex tester for the if statements
  let testCharacter = /^[^!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿0123456789]*$/

  // This tests to see if the user filled in all input fiels or not
  if(emptyStringTest.test(createFirstName.value) && emptyStringTest.test(createLastName.value)) {
    // console.log('invalid name input 1234');
    document.getElementById('nameInputError').style.display = "block";
  }
  // This tests for any invalid characters that should not be in a name
  else if(testCharacter.test(createFirstName.value) && testCharacter.test(createLastName.value)) {
    // let saveNames = new Object(createFirstName.value + " " + createLastName.value);

    let saveNames = {
      name: `${createFirstName.value} ${createLastName.value}`,
    }
    nameArray.push(saveNames);
    let saveEmail = {
      email: inputEmail.value,
    }
    emailArray.push(saveEmail);
    // let lastOfNameArray = nameArray.length - 1;
    console.log('all user names', nameArray);
    console.log('all user emails', emailArray);
    document.getElementById('nameInputError').style.display = "none";
    welcome.style.display = "none";

    // temporary test code to display a welcome message on the  landing page when the final log in is finished
    // welcome.style.display = "block";
    // welcome.innerHTML = ('Welcome ' + nameArray[lastOfNameArray] + '!');
  }
  // Just in case there is some other problem this will give an error message
    else {
    //   console.log('invalid name input');
      document.getElementById('nameInputError').style.display = "block";
      welcome.style.display = "none";
    }
  }