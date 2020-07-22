let createFirstName = document.getElementById('createFirstName');
let createLastName = document.getElementById('createLastName');
let nameSubmit = document.getElementById('nameSubmit');
// let nameArray = [];

// createFirstName.addEventListener('keyup', );
// createLastName.addEventListener('keyup', );
nameSubmit.addEventListener('click', validNames);

function validNames() {
  console.log('clicker');
  event.preventDefault();

  // let firstName = document.getElementById('createFirstName').value;
  // let lastName = document.getElementById('createLastName').value;
  let testCharacter = /^(?=.*\W).*$/

  if(testCharacter.test(createFirstName.value)) {
    console.log('bad first name');

  }
  else {
    console.log('good first name');
  }

  if(testCharacter.test(createLastName.value)) {
    console.log('bad last name');
  }
  else {
    console.log('good last name');
  }


  // checks if either field is empty
  //takes the inputs and saves them
}