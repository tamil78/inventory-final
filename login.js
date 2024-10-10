// Handle showing/hiding the login and signup forms
document.getElementById("signInButton").addEventListener("click", function() {
    document.getElementById("signIn").style.display = "block";
    document.getElementById("signup").style.display = "none";
});

document.getElementById("signUpButton").addEventListener("click", function() {
    document.getElementById("signIn").style.display = "none";
    document.getElementById("signup").style.display = "block";
});
