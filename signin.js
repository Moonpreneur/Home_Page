document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signinForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mock authentication
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username === 'user' && password === 'password') {
            alert('Sign In Successful');
            window.location.href = 'index.html'; // Redirect to homepage after successful sign-in
        } else {
            alert('Invalid username or password');
        }
    });
});
