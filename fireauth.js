import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Handle sign-up
document.getElementById("submitSignUp").addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.getElementById("rEmail").value;
    const password = document.getElementById("rPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            alert("Sign-up successful!");
            document.getElementById("signup").style.display = "none"; // Hide sign-up
            document.getElementById("home").style.display = "block"; // Show home
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Handle sign-in
document.getElementById("submitSignIn").addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            alert("Sign-in successful!");
            document.getElementById("signIn").style.display = "none"; // Hide sign-in
            document.getElementById("home").style.display = "block"; // Show home
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Google sign-in
const provider = new GoogleAuthProvider();

document.getElementById("googleSignIn").addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Google Sign-in successful!");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

document.getElementById("googleSignUp").addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Google Sign-up successful!");
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
