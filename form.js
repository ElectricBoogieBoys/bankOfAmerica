let test = document.getElementById('test');
let form = document.getElementById('form');

form.addEventListener("keyup", testWrite);

function testWrite(){
  console.log(test.value); 
};
