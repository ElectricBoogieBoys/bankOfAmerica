// setting up our objects//
let confirm = document.getElementById('confirm');
let pass = document.getElementById('password');
let form = document.getElementById('form');
let error = document.getElementById('error');
let length = document.getElementById('length');
let valid = document.getElementById('invalidCharacters');
let varied =document.getElementById('varied');
let unique = document.getElementById('unique')
//arrays and flags
let passArray = [];
let passwordFlag = false;
//setting up my regex
let lengthCheck = /.{8,20}$/
//let validCheck = /[A-Za-z0-9!$%^&;:''""<>]*/g
let validCheck = /^(?=.*\d)(?=.*[A-Z])(?!.*[!$%^&;:''""<>])(.{8,15})$/g
//let validCheck = /^(?=.*\d)(?=.*[A-Z])(?!.*[@#*$^+={}?\/~,])(.{8,15})$/g
let variedCheck = /(?=.*[@#*$^+={}?\/~,])/g
//let variedCheck = /(?=.*[!$%^&;:''""<>])/g
let uniqueCheck = /(?:([A-za-z0-9])\1{1,1}\1{1,1})*/g
//let uniqueCheck = /[^\d{3,} a-z{3,} A-Z{3,}]/g

form.addEventListener('keyup', checkPass)

function checkPass() {
  console.log('password is', pass.value)
//checks password length
if(lengthCheck.test(pass.value)){
  length.classList.add("liCorrect");
}else{
  length.classList.remove('liCorrect');
}

//checks if all characters are valid
if(validCheck.test(pass.value)){
  valid.classList.add("liCorrect");
}else{
  valid.classList.remove("liCorrect");
}

//checks if theres a capital, number and symbol
if(!variedCheck.test(pass.value)){
  console.log('varied check passed')
  varied.classList.add("liCorrect");
}else{
  varied.classList.remove("liCorrect");
}

//checks if characters arent repeated
if(uniqueCheck.test(pass.value)){
  unique.classList.add("liCorrect");
}else{
  unique.classList.remove("liCorrect");
}

//final check for submit
console.log('checks work')
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
    let savePass = new Object(confirm.value)
    PassArray.push(savePass);
    let lastOfPassArray = PassArray.length - 1;
    console.log('all passwords', passArray[lastOfPassArray]);
  }else{
    error.innerHTML = "<p> Your passwords don't seem to match, please try again </p>"
  } 
  //}else{ 
    }
  }
