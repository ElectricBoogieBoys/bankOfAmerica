let createFirstName = document.getElementById('createFirstName');
let createLastName = document.getElementById('createLastName');
let nameSubmit = document.getElementById('nameSubmit');
let nameArray = [];

// createFirstName.addEventListener('keyup', );
// createLastName.addEventListener('keyup', );
nameSubmit.addEventListener('click', validNames);

function validNames() {
  event.preventDefault();

  let testCharacter = /^[^!@#$%^&*()_+={}\[\]|\\:;“’<,>.?๐฿0123456789]*$/
  let emptyStringTest = /^$/
  if(emptyStringTest.test(createFirstName.value) && emptyStringTest.test(createLastName.value)) {
    console.log('invalid name input 1234');
    document.getElementById('nameError').style.display = "block";
  }
  else if(testCharacter.test(createFirstName.value) && testCharacter.test(createLastName.value)) {
    let saveNames = new Object(createFirstName.value + " " + createLastName.value)
    nameArray.push(saveNames);
    let lastOfNameArray = nameArray.length - 1;
    console.log('all user real names', nameArray[lastOfNameArray]);
    document.getElementById('nameError').style.display = "none";
  }
    else {
      console.log('invalid name input');
      document.getElementById('nameError').style.display = "block";
    }
  }

// str.search("");
// -exempt characters  ` - ~ ¨
// - filtered characters  !@#$%^&*()_+=[{}|\/?,<>;:'"0123456789


    // localStorage.setItem('nameArray', nameArray);
    // JSON.stringify('nameArray', nameArray);
    // JSON.parse(('nameArray', nameArray));
    // localStorage.getItem('nameArray', nameArray);
    // console.log(nameArray);