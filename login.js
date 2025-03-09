document.addEventListener("DOMContentLoaded", () => {
    const toggleForm = document.getElementById("toggle-form");
    const loginForm = document.getElementById("login-form");
    const signUpForm = document.getElementById("sign-up");
    const formTitle = document.getElementById("form-title");

    toggleForm.addEventListener("click", () => {
        if (loginForm.classList.contains("hidden")) {
            loginForm.classList.remove("hidden");
            signUpForm.classList.add("hidden");
            formTitle.textContent = "Login";
            toggleForm.innerHTML = "Don't have an account? <span>Sign-Up</span>";
        } else {
            loginForm.classList.add("hidden");
            signUpForm.classList.remove("hidden");
            formTitle.textContent = "Sign Up";
            toggleForm.innerHTML = "Already have an account? <span>Login</span>";
        }
    });
});