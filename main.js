function redirectToHome() {
    window.location.href = "index.html";
}

let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelectorAll('.signup-link'),
    signInLink = document.querySelectorAll('.signin-link');


signUpLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('animated-signup');
        wrapper.classList.remove('animated-signin');
    });
});


signInLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('animated-signin');
        wrapper.classList.remove('animated-signup');
    });
});
