function formSubmit(){
    let firstNameElement = document.getElementById('first-name').value;
    let lastNameElement = document.getElementById('last-name').value;
    let passwordElement = document.getElementById('password').value;
    let emailElement = document.getElementById('email').value;
    let pattern = /\w+@[a-z]+\.\w+/;

    let errorMsg = document.querySelectorAll('form > div')
    console.log(errorMsg);
    if (firstNameElement.length == 0) {
        errorMsg[0].style.display = 'block';
    } else{
        errorMsg[0].style.display = 'none';
    }
    if (lastNameElement.length == 0) {
        errorMsg[1].style.display = 'block';
    } else{
        errorMsg[1].style.display = 'none';
    }
    if (passwordElement.length == 0) {
        errorMsg[3].style.display = 'block';
    } else{
        errorMsg[3].style.display = 'none';
    }
    if(pattern.test(emailElement) == false){
        errorMsg[2].style.display = 'block';
    } else{
        errorMsg[2].style.display = 'none';
    }
}