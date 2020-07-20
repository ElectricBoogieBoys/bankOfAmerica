// setting up our objects//
let confirm = document.getElementById('confirm');
let pass = document.getElementById('password')
let form = document.getElementById('form');
let error = document.getElementById('error')
form.addEventListener("submit", testWrite);

//test console logging the values//
function testWrite(){
  event.preventDefault();
  if((pass.value)===(confirm.value)){
  console.log(confirm.value, pass.value);
  }else{
    error.innerHTML = "Your passwords don't seem to match, please try again"
  }  
  
};
