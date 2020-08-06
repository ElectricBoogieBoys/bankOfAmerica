
// setting up our objects//
let name = document.getElementById('username');
let pass = document.getElementById('password')
let form = document.getElementById('form');

form.addEventListener("submit", testWrite);

//test console logging the values//
function testWrite(){
  event.preventDefault();
  console.log(name.value, pass.value);
  
};