// calls in the form input for a username
let createUsername = document.getElementById('createUsername');

// calls in the submit button
let usernameSubmit = document.getElementById('usernameSubmit');

// creates a new array where the usernames will remporarily be stored
let IDArray = [];

// the checkUsername function will run when the submit button is clicked
usernameSubmit.addEventListener('click', checkUsername);

  // checkUsername will check if the username is greater than 8 character and will check if it is blank
  // if everything is valid then the username will be saved
  // if either of those  
function checkUsername() {
    event.preventDefault();

    // regex to test the username input
    let emptyUsernameTest = /^$/

    // regex to test if the input field is left blank
    // if the input field is blank an error message will be displayed to the user
    if(emptyUsernameTest.test(createUsername.value)) {
        document.getElementById('usernameBlank').style.display = "block";
        document.getElementById('invalidUsername').style.display = "none";
        document.getElementById('usernameTaken').style.display = "none";
        console.log('Please enter a username.');
    } 
    // ckecks if the username is shorter than 8 characters
    // if that is the case then an error message will be displayed to the user
    else if(createUsername.value.length < 8){
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "block";
        document.getElementById('usernameTaken').style.display = "none";
        console.log('Too short.');
    }
    // this will maybe be used later to check for a server error and than display a certain error message to the user
    // else if (){
    //     document.getElementById('usernameBlank').style.display = "none";
    //     document.getElementById('invalidUsername').style.display = "none";
    //     document.getElementById('usernameTaken').style.display = "block";
    // } 
    // stores the usernames as ojects in an array (temporary)
    else {
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "none";
        document.getElementById('usernameTaken').style.display = "none";
        // let saveUserIds = new Object(createUsername.value);
        let saveUserIds = {
            username: createUsername.value,
        }
        IDArray.push(saveUserIds);
        console.log('These are the usernames: ',IDArray);
        // let lastOfIDArray = IDArray.length - 1;
        // console.log('all user IDs', IDArray[lastOfIDArray]);
        }
}