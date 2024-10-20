// Basic script for form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea');

        if (!name.value || !email.value || !message.value) {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});
