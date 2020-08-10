// setting up our objects
let name = document.getElementById('username');
let pass = document.getElementById('password')
let form = document.getElementById('form');
let emptyTest = /^$/

form.addEventListener('submit', loginFunction);

function loginFunction(event) {
  event.preventDefault();
  if(emptyTest.test(name.value) || emptyTest.test(pass.value)) {
    document.getElementById('loginError1').style.display = "block";
  }
  else {
    document.getElementById('loginError1').style.display = "none";

    return axios.get('https://dsya-server.herokuapp.com/team2/login/', {
      auth: {
        username: name.value,
        password: pass.value,
      }
    }) 
      .then(response => {
        if(response.data === 'Password incorrect') {
          document.getElementById('loginError1').style.display = "none";
          document.getElementById('loginError2').style.display = "block";
        }
        else {
          document.getElementById('loginError1').style.display = "none";
          document.getElementById('loginError2').style.display = "block";
          window.location.replace('http://127.0.0.1:5501/landing.html');
        }
          })
      .catch(error => {
        console.log('error', error.text);
      })
    }
}