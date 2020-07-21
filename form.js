// setting up our objects//
let confirm = document.getElementById('confirm');
let pass = document.getElementById('password')
let form = document.getElementById('form');
let error = document.getElementById('error')
form.addEventListener("submit", testWrite);

//test console logging the values//
function testWrite(){
  event.preventDefault();
  let re = /^(?=.{8,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
  if(re.test(pass.value)){
    console.log('passed regex text')
    if((pass.value)===(confirm.value)){
      console.log(confirm.value, pass.value);
    }else{
    error.innerHTML = "<p> Your passwords don't seem to match, please try again </p>"
    } 
  }else{
    
  } 
  
};
