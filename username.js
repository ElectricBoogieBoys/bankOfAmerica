// Calls in the form inputs
let createFirstName = document.getElementById('createFirstName');
let createLastName = document.getElementById('createLastName');
// Calls in the submit button
let nameSubmit = document.getElementById('nameSubmit');
// This array is where the full names will be stored as objectsfor later use
let nameArray = [];

// temporary test code to display a welcome message on the  landing page when the final log in is finished
let welcome = document.getElementById('welcome');

// Event listener that fires the 'validNames' function when when the submit button is clicked
nameSubmit.addEventListener('click', validNames);

// This function makes sure that the names out in by the user are valid
function validNames() {
  event.preventDefault();

  // These are regex tester for the if statements
  let testCharacter = /^[^!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿0123456789]*$/
  let emptyStringTest = /^$/

  // This tests to see if the user filled in all input fiels or not
  // If they did not an error message will be displayed to the user
  if(emptyStringTest.test(createFirstName.value) && emptyStringTest.test(createLastName.value)) {
    console.log('invalid name input 1234');
    document.getElementById('nameInputError').style.display = "block";
  }
  // This tests for any invalid characters that should not be in a name
  // If either of the tests is true, an error message will be displayed to the user
  // Otherwise, the forst and last names will be put together in an object and placed into the 'nameArray' array
  else if(testCharacter.test(createFirstName.value) && testCharacter.test(createLastName.value)) {
    let saveNames = new Object(createFirstName.value + " " + createLastName.value)
    nameArray.push(saveNames);
    let lastOfNameArray = nameArray.length - 1;
    console.log('all user names', nameArray[lastOfNameArray]);
    document.getElementById('nameInputError').style.display = "none";

    // temporary test code to display a welcome message on the  landing page when the final log in is finished
    welcome.style.display = "block";
    welcome.innerHTML = ('Welcome ' + nameArray[lastOfNameArray] + '!');
  }
  // Just in case there is some other problem this will give an error message
    else {
      console.log('invalid name input');
      document.getElementById('nameInputError').style.display = "block";
    }
  };