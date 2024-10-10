// Function to handle search functionality
document.querySelector(".search-bar button").addEventListener("click", function() {
    const searchTerm = document.querySelector(".search-bar input").value;
    // Implement search logic (e.g., filter products)
    alert(`Searching for: ${searchTerm}`);
});

// Function to display messages
function displayMessage(message, type) {
    const messageDiv = document.getElementById(type === "signup" ? "signUpMessage" : "signInMessage");
    messageDiv.textContent = message;
    messageDiv.style.display = "block";
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}

// Function to handle Shop Now button
function shopNow() {
    alert("Redirecting to shop...");
    window.location.href = 'shop-page.html'; // Replace this with the actual shop page link
}

// Sign In functionality (to be connected with Firebase auth logic)
document.getElementById('signIn').addEventListener('click', function() {
    alert('Redirecting to sign-in page...');
    window.location.href = 'signin-page.html'; // Replace this with the actual sign-in page link
});

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
    alert('You have been logged out.');
    // Implement Firebase sign-out logic here
});
