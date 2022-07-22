function registrationForm(){
    let title = document.getElementById('title');
    title.innerHTML='Signup Form';
    title.style.fontSize = "1.5rem";
    title.style.fontFamily = "Arial, Helvetica, sans-serif";
    let loginForm = document.querySelector('.login');
    loginForm.style.display = 'none';
    let signupForm = document.querySelector('.signup');
    signupForm.style.display = 'block';
}

function loginForm(){
    let title = document.getElementById('title');
    title.innerHTML='Login Form';
    title.style.fontSize = "2rem";
    title.style.fontFamily = "Arial, Helvetica, sans-serif";
    let loginForm = document.querySelector('.login');
    loginForm.style.display = 'block';
    let signupForm = document.querySelector('.signup');
    signupForm.style.display = 'none';
}

function signupSubmit(){
    let signupEmail = document.getElementById('signup-email');
    let signupPassword = document.getElementById('signup-password');
    let signupCpass = document.getElementById('signup-cpass');
    let backupPin = document.getElementById('backup-pin');

    if(signupPassword.value == signupCpass.value){
        let array = [signupEmail.value,signupPassword.value,backupPin.value];
        localStorage.setItem('person',JSON.stringify(array));
    }
}

function loginSubmit(){
    let name = localStorage.getItem('person');
    name = JSON.parse(name);
    let loginEmail = document.getElementById('login-email');
    let loginPassword = document.getElementById('login-password');
    if((loginEmail.value==name[0])&&(loginPassword.value==name[1]))
    {
        console.log('Login sucessfull');
    }
    else{
        console.log('Incorrect details');
    }
}