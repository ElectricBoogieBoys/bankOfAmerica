let createFirstName = document.getElementById('createFirstName');
let createLastName = document.getElementById('createLastName');
let nameSubmit = document.getElementById('nameSubmit');
let nameArray = [];

// createFirstName.addEventListener('keyup', );
// createLastName.addEventListener('keyup', );
nameSubmit.addEventListener('click', validNames);

function validNames() {
  event.preventDefault();

  // let testCharacter = /^(?=.*\W).*$/

  if(2 > 1) {
    let saveNames = new Object(createFirstName.value + " " + createLastName.value)
    nameArray.push(saveNames);
    console.log('all user real names', nameArray[0]);
    
  }
  if(1 > 2) {
    console.log('bad first name');
  }
  else {
    
  }
}

    // localStorage.setItem('nameArray', nameArray);
    // JSON.stringify('nameArray', nameArray);
    // JSON.parse(('nameArray', nameArray));
    // localStorage.getItem('nameArray', nameArray);
    // console.log(nameArray);