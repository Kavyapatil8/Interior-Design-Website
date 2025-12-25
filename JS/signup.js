document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Validate password confirmation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Store user data (this is just for front-end testing, in production use a backend)
    let user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user)); // Save user data to localStorage

    alert("Signup successful! Redirecting to login page.");
    
    // Redirect to login page
    window.location.href = "login.html";
});
