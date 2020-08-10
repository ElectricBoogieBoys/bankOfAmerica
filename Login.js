
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
//to show the forgot password's responsiveness
let amnesia = document.getElementById('forgotPassword'); 
amnesia.addEventListener('click' , function() {

})
//for registering an account
document.getElementById('register').onclick = function testChange() {
 

}
