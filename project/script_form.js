document.addEventListener('DOMContentLoaded', (event) => {
    const openFormButton = document.getElementById('redirect_form');
    const formModal = document.getElementById('form');
    const closeButton = document.getElementsByClassName('close')[0];
    const userForm = document.getElementById('user_form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');

    if(openFormButton)
    {
        openFormButton.onclick = function(event) {
            event.preventDefault(); // comportamentul default ar fi sa trimita formularul
            formModal.style.display = 'block';
        }
    }
    if(closeButton)
    {
        closeButton.onclick = function(event){
            formModal.style.display = 'none';
        }
    }
    window.onclick = function(event) {
        if (event.target == formModal){
            formModal.style.display = 'none';
        }
    }

    if(userForm)
    {
        userForm.onsubmit = function(event){
            const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/; // conditii
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!usernameRegex.test(usernameInput.value)) // testeaza valoarea de input folosind regex
            {
                alert('Username must be 3-15 characters long and can only contain letters, numbers, and underscores.');
                event.preventDefault(); // un fel de throw
                return false;
            }
            if(!emailRegex.test(emailInput.value))
            {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return false;
            }

            let users = JSON.parse(localStorage.getItem('users')) || []; // ctrl shift i application local storage localhost:5000
            users.push({ username: usernameInput.value, email: emailInput.value });
            localStorage.setItem('users', JSON.stringify(users));
            return true;
        }
    }
});
