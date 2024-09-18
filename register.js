document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if(password === confirmPassword) {
            // Mock registration
            alert('Registration Successful');
            window.location.href = 'signin.html'; 
        } else {
            alert('Passwords do not match');
        }
    });
});
