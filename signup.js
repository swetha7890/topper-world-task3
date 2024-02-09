document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the "CONTINUE" button
    document.getElementById('continue').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        var name = document.getElementById('Name').value;
        var email = document.getElementById('Email').value;
        var password = document.getElementById('password').value;
        var username = document.getElementById('username').value;
        var mobile = document.getElementById('Mobile').value;
        var description = document.getElementById('Desc').value;

        // Create an object to store user details
        var userDetails = {
            name: name,
            email: email,
            password: password,
            username: username,
            mobile: mobile,
            description: description
        };

        // Save user details to local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));

        // Provide a simple alert to indicate successful saving
        alert('Details saved successfully!');
    });
});
