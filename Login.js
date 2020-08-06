// setting up our objects
let name = document.getElementById('username');
let pass = document.getElementById('password')
let form = document.getElementById('form');
let emptyTest = /^$/
form.addEventListener('submit', loginFunction);

function loginFunction(event) {
  event.preventDefault();
  if(emptyTest.test(name.value) || emptyTest.test(pass.value)) {
    document.getElementById('loginError').style.display = "block";
    console.log('maybe');
  }
  else {
    console.log('no');
    console.log('name', name.value);
    console.log('password', pass.value);
    document.getElementById('loginError').style.display = "none";

    return axios.get('https://dsya-server.herokuapp.com/team2/login/', {
      auth: {
        username: name.value,
        password: pass.value,
      }
    }) 
      .then(response => {
        console.log('response.data', response.data);
        window.location.replace('http://127.0.0.1:5501/landing.html');
          })
      .catch(error => {
        console.log('error', error.text);
      })
    }
}