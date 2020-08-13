let welcome =document.getElementById('welcome')
let user = JSON.parse(localStorage.getItem('user'));
welcome.innerHTML = `Welcome ${user.name}!`