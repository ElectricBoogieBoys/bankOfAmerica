// calls in the form input for a username
let createUsername = document.getElementById('createUsername');
let createPassword = document.getElementById('confirm');
// calls in the submit button
let submitButton = document.getElementById('form');
const URL = 'https://electricboogieboys.github.io/bankOfAmerica/'
//const URL = 'http://127.0.0.1:5501/'

// creates a new array where the usernames will remporarily be stored
let IDArray = [];
let check1 = false;
let check2 = false;

// the checkUsername function will run when the submit button is clicked
createUsername.addEventListener('keyup', checkUsername);
submitButton.addEventListener('submit', submitUsername);
submitButton.addEventListener('submit', createUser);

  // checkUsername will check if the username is greater than 8 character and will check if it is blank
function checkUsername() {
    event.preventDefault();

    // regex to test the username input
    let emptyUsernameTest = /^$/

    // regex to test if the input field is left blank
    if(emptyUsernameTest.test(createUsername.value)) {
        document.getElementById('usernameBlank').style.display = "block";
        document.getElementById('invalidUsername').style.display = "none";
        document.getElementById('usernameTaken').style.display = "none";
        document.getElementById('goodUsername').style.display = "none";
        check1 = false;
    } 
    // ckecks if the username is shorter than 8 characters
    else if(createUsername.value.length < 8) {
        document.getElementById('usernameBlank').style.display = "none";
        document.getElementById('invalidUsername').style.display = "block";
        document.getElementById('usernameTaken').style.display = "none";
        document.getElementById('goodUsername').style.display = "none";
        check2 = false;
    }
    // displays that the username is good and turns checks 1 and 2 true
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
        localStorage.setItem('username', JSON.stringify(saveUserIds));
        IDArray.push(saveUserIds);
    }
}

function createUser() {
    event.preventDefault();

    let realName = JSON.parse(localStorage.getItem('realName'));
    let email = JSON.parse(localStorage.getItem('email'));
    let username = createUsername.value;
    //let password = JSON.parse(localStorage.getItem('password'));
    let password = createPassword.value;

    localStorage.clear();
    let user = {
        name: realName,
        email: email,
        username: username,
        password: password,
    }
    console.log('sending info', user)
    axios.post('https://dsya-server.herokuapp.com/team2/createuser/', user) 
        .then(response => {
            console.log('response.data', response.data);
            //window.location.replace(`${URL}Login.html`);
        })
        .catch(error => {
            console.log('error', error.request.data);
        })

}