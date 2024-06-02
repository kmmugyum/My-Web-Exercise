document.getElementById('signup_form').addEventListener('submit', function(event) {
    event.preventDefault();

    alert("Sign Up Successed");

    window.location.href = "/login/login.html";
})