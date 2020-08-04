// setting up our objects//
let confirm = document.getElementById('confirm');
let pass = document.getElementById('password');
let form = document.getElementById('form');
let error = document.getElementById('error');
let length = document.getElementById('length');
let valid = document.getElementById('invalidCharacters');
let varied =document.getElementById('varied');
let unique = document.getElementById('unique');

//arrays and flags
let passArray = [];
let passwordFlag = false;
let confirmFlag = false;

//setting up my regex
let lengthCheck = /.{8,20}$/
//let validCheck = /[A-Za-z0-9!$%^&;:''""<>]*/g
let invalidCharacters = /[@#*()+={}/?~,._-]/;
//let validCheck = /^(?=.*\d)(?=.*[A-Z])(?!.*[@#*$^+={}?\/~,])(.{8,15})$/g
let variedCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!~$%^&<>]).*$/;
//let variedCheck = /(?=.*[!$%^&;:''""<>])/g
let uniqueCheck = /([a-z!~$%^&<>0-9])\1\1/ig;
//let uniqueCheck = /[^\d{3,} a-z{3,} A-Z{3,}]/g

form.addEventListener('keyup', checkPass)

function checkPass() {

  //checks password length
  if(lengthCheck.test(pass.value)){
    length.classList.add("liCorrect");
  }else{
    length.classList.remove('liCorrect');
  }

  //checks if all characters are valid
  if(!invalidCharacters.test(pass.value) && lengthCheck.test(pass.value)){
    valid.classList.add("liCorrect");
  }else{
    valid.classList.remove("liCorrect");
  }

  //checks if theres a capital, number and symbol
  if(variedCheck.test(pass.value)){
    varied.classList.add("liCorrect");
  }else{
    varied.classList.remove("liCorrect");
  }

  //checks if characters arent repeated
  if(!uniqueCheck.test(pass.value) && lengthCheck.test(pass.value)){
    unique.classList.add("liCorrect");
  }else{
    unique.classList.remove("liCorrect");
  }

  //final check for submit

  if(!uniqueCheck.test(pass.value) && lengthCheck.test(pass.value) && variedCheck.test(pass.value) && !invalidCharacters.test(pass.value)){
    passwordFlag = true;
  }

  if((pass.value)===(confirm.value)){
    confirmFlag = true;
  }

  if(passwordFlag === true && confirmFlag === true){
    form.addEventListener("submit", testWrite);
  }
}

//test console logging the values//
function testWrite(event){
  event.preventDefault();
  
  if( pass.value === confirm.value){
    
    let savePass = {
      password: confirm.value, 
    }
    passArray.push(savePass);

    console.log('pushing it into array');
    console.log('all passwords', passArray);
  }else{
    error.innerHTML = "<p> Your passwords don't seem to match, please try again </p>"
  } 
 
}
  
