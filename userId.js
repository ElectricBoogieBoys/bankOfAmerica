// calls in the form input for a username
let createUsername = document.getElementById('createUsername');

// calls in the submit button
// let usernameSubmit = document.getElementById('usernameSubmit');
let submitButton = document.getElementById('form');

// creates a new array where the usernames will remporarily be stored
let IDArray = [];
let check1 = false;
let check2 = false;
// the checkUsername function will run when the submit button is clicked
// usernameSubmit.addEventListener('click', checkUsername);
createUsername.addEventListener('keyup', checkUsername);
submitButton.addEventListener('submit', submitUsername);
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
        document.getElementById('goodUsername').style.display = "none";
        check1 = false;
        // console.log('Please enter a username.');
    } 
    // ckecks if the username is shorter than 8 characters
    // if that is the case then an error message will be displayed to the user
    else if(createUsername.value.length < 8) {
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "block";
        document.getElementById('usernameTaken').style.display = "none";
        document.getElementById('goodUsername').style.display = "none";
        check2 = false;
        // console.log('Too short.');
    }
    // stores the usernames as ojects in an array (temporary)
    else {
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "none";
        document.getElementById('usernameTaken').style.display = "none";
        document.getElementById('goodUsername').style.display = "block";
        check1 = true;
        check2 = true;
    }
    if(createUsername.value.length >= 8 && createUsername.value.length <= 20) {
        axios.get(`https://dsya-server.herokuapp.com/team2/checkusername/${createUsername.value}`)
            .then(response => {
                console.log('response', response.data);
                if(response.data === "user exists") {
                    document.getElementById('usernameBlank').style.display = "none";
                    document.getElementById('invalidUsername').style.display = "none";
                    document.getElementById('usernameTaken').style.display = "block";
                    document.getElementById('goodUsername').style.display = "none";
                }
            })
            .catch(error => {
                console.log(error);
                // error messages go here 
            })
    }
}

function submitUsername() {
    event.preventDefault();
    if(check1 === true && check2 === true) {
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "none";
        document.getElementById('usernameTaken').style.display = "none";
        document.getElementById('goodUsername').style.display = "block";
        let saveUserIds = {
            username: createUsername.value,
        }
        IDArray.push(saveUserIds);
        console.log('These are the usernames: ',IDArray);
    }
}