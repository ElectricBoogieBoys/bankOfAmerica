let createUsername = document.getElementById('createUsername');
let usernameSubmit = document.getElementById('usernameSubmit');
let IDArray = [];

usernameSubmit.addEventListener('click', checkUsername);

  // checkUsername will check if the username is greater than 8 character and will check if it is blank
  // if everything is valid then the username will be saved
  // if either of those  
function checkUsername() {
    event.preventDefault();
    let emptyUsernameTest = /^$/

    if(emptyUsernameTest.test(createUsername.value)) {
        document.getElementById('usernameBlank').style.display = "block";
        document.getElementById('invalidUsername').style.display = "none";
        document.getElementById('usernameTaken').style.display = "none";
        console.log('Please enter a username.');
    } else if(createUsername.value.length < 8){
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "block";
        document.getElementById('usernameTaken').style.display = "none";
        console.log('Too short.');
    }
    // else if (){
    //     document.getElementById('usernameBlank').style.display = "none";
    //     document.getElementById('invalidUsername').style.display = "none";
    //     document.getElementById('usernameTaken').style.display = "block";
    } else {
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "none";
        document.getElementById('usernameTaken').style.display = "none";
        let saveUserIds = new Object(createUsername);
        nameArray.push(saveUserIds);
        let lastOfIDArray = IDArray.length - 1;
        console.log('all user IDs', nameArray[lastOfIDArray]);
        }
}

  // If the previous stuff is correct, hide it and show create username part
  // user inputs a username and if it fits the requirements and is not already taken it is saved for future use
  // if it is not correct an error message is show (either 'invalid username' error or 'username taken' error)