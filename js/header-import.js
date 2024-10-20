document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById('header-placeholder');

    // Fetch and load the header content
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            headerPlaceholder.innerHTML = data;

            // After the header is loaded, assign the hamburger and nav links
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            // Add click event listener to the hamburger to toggle the active class
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                console.log('Hamburger clicked!'); // Debugging log
            });
        })
        .catch(error => console.error('Error loading header:', error));
});
