// setting up our objects
let name = document.getElementById('username');
let pass = document.getElementById('password')
let form = document.getElementById('form');

// setting up flags
let userMatch = false;
let passMatch = false;

if(userMatch === true && passMatch === true) {
  form.addEventListener('submit', testWrite);
}

// test console logging the values
function testWrite() {
  event.preventDefault();
  console.log(name.value, pass.value);
  window.location.href = "landing.html";
}
