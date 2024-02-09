document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the "Login" button
    document.getElementById('Login').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Provide a simple alert to indicate successful login
        alert('Login successful! Redirecting to the home page...');

        // Redirect to the home page (replace 'home.html' with your actual home page URL)
        window.location.href = 'landing.html';
    });
});
