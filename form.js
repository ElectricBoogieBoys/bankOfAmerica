// setting up our objects//
let confirm = document.getElementById('confirm');
let pass = document.getElementById('password')
let form = document.getElementById('form');
let error = document.getElementById('error');
let length = document.getElementById('length')
let valid = document.getElementById('invalidCharacters')
//setting up my regex
let lengthCheck = /.{8,20}$/
let validCheck = /[^@#*()+={}\/?~,.-_]/


form.addEventListener('keyup', checkPass)

function checkPass() {

if(lengthCheck.test(pass.value)){
  console.log('long enough')
  length.classList.toggle("liCorrect");
}
if(validCheck.test(pass.value)){
  console.log('long enough')
  valid.classList.toggle("liCorrect");
}
if(length.class === 'liCorrect'){
  console.log('class checked')
  form.addEventListener("submit", testWrite);
}

//test console logging the values//
function testWrite(){
  event.preventDefault();
  //let re = /^()(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
  //if(re.test(pass.value)){
  console.log('passed regex text')
  if((pass.value)===(confirm.value)){
    console.log(confirm.value, pass.value);
  }else{
    error.innerHTML = "<p> Your passwords don't seem to match, please try again </p>"
  } 
  //}else{ 
    }
  }
