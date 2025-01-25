function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

   
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        message.textContent = 'Login successful!';
        message.className = 'success';
        return false; 
    } else {
        message.textContent = 'Invalid username or password.';
        message.className = 'error';
        return false; 
    }
}
