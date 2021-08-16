
const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function(){
        // get user email
        const userField = document.getElementById('user-email');
        const userEmail = userField.value;

        // get user password
        const passwordField = document.getElementById('user-password');
        const userPassword = passwordField.value;

        // condition
        if(userEmail == 'ibrahim@gmail.com' && userPassword == 'ibrahim'){
            window.location.href = 'banking.html'
        }
    })











