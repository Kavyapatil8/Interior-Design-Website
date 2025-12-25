document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const logoutBtn = document.querySelector(".navbar-links li:nth-child(8) a"); // LOGOUT button
    const loginBtn = document.querySelector(".navbar-links li:nth-child(7) a"); // LOGIN button
    const galleryLink = document.querySelector(".navbar-links li:nth-child(4) a"); // GALLERY link

    // Check if user is logged in
    function checkLoginStatus() {
        let isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            loginBtn.style.display = "none"; // Hide LOGIN button
            logoutBtn.style.display = "inline"; // Show LOGOUT button
        } else {
            loginBtn.style.display = "inline"; // Show LOGIN button
            logoutBtn.style.display = "none"; // Hide LOGOUT button
        }
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            // Retrieve stored user data
            let storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && username === storedUser.username && password === storedUser.password) {
                alert("Login successful!");
                localStorage.setItem("isLoggedIn", "true"); // Set login status
                checkLoginStatus();
                window.location.href = "index.html"; // Redirect to home page
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    // Restrict gallery page access
    if (galleryLink) {
        galleryLink.addEventListener("click", function (event) {
            let isLoggedIn = localStorage.getItem("isLoggedIn");
            if (isLoggedIn !== "true") {
                event.preventDefault();
                alert("Please log in to access the gallery.");
            }
        });
    }

    // Handle logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn"); // Remove login status
            alert("You have been logged out.");
            checkLoginStatus();
            window.location.href = "index.html"; // Redirect to home page
        });
    }

    checkLoginStatus(); // Run on page load
});

